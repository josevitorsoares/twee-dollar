import {
  DOLLAR_OBJECTID,
  EXTERNAL_API,
  PHRASES_OBJECTID,
} from "configs/environment/env";
import type {
  DollarEntity,
  IDollarRepository,
  IHttpClientService,
  IPhraseRepository,
  ITwitterRepository,
  PhraseOutput,
} from "src/domain";
import type { IGetDollarUseCase } from "src/domain/usecases";
import { CoinMapper } from "src/infrastructure";

export class GetDollarUseCase implements IGetDollarUseCase {
  constructor(
    private readonly _httpClientService: IHttpClientService,
    private readonly _dollarRepository: IDollarRepository,
    private readonly _twitterRepository: ITwitterRepository,
    private readonly _phraseRepository: IPhraseRepository
  ) {}

  private _getAleatoryMessage(
    phrase: PhraseOutput,
    dollar: {
      dollarStatus: "up" | "down";
      price: string;
      time: string;
      change: string;
      percent: string;
    }
  ): string {
    const { change, dollarStatus, percent, price, time } = dollar;

    const title = phrase.title;

    const opening =
      phrase.openings[dollarStatus][
        Math.floor(Math.random() * phrase.openings[dollarStatus].length)
      ];

    const data = phrase.dataBlocks[
      Math.floor(Math.random() * phrase.dataBlocks.length)
    ]
      .replace(/\{price\}/g, price)
      .replace(/\{time\}/g, time);

    const variation = phrase.variationBlocks[dollarStatus][
      Math.floor(Math.random() * phrase.variationBlocks[dollarStatus].length)
    ]
      .replace(/\{change\}/g, change)
      .replace(/\{percent\}/g, percent);

    const closing =
      phrase.closings[Math.floor(Math.random() * phrase.closings.length)];

    return `${title}\n\n${opening}\n${data}\n${variation}\n${closing}`;
  }

  async execute(): Promise<void> {
    const response = await this._httpClientService.request<DollarEntity>({
      method: "get",
      url: EXTERNAL_API,
    });

    const coin = CoinMapper.toDomain(response.body);

    const dollar = await this._dollarRepository.findById(DOLLAR_OBJECTID);
    const phrase = await this._phraseRepository.findById(PHRASES_OBJECTID);

    if (!dollar || !phrase) return;

    if (!dollar.value) {
      dollar.value = coin.value;
      dollar.percentageChange = "";
      dollar.variation = "";
      dollar.time = coin.time;

      await this._dollarRepository
        .update({
          id: DOLLAR_OBJECTID,
          value: dollar.value,
          variation: dollar.variation,
          percentageChange: dollar.percentageChange,
          time: dollar.time,
        })
        .catch((err) => console.log(err));
    }

    switch (true) {
      case Number(coin.value) > Number(dollar.value): {
        const variation = Number(coin.value) - Number(dollar.value);

        const percentageChange = (
          (variation / Number(dollar.value)) *
          100
        ).toFixed(2);

        const message = this._getAleatoryMessage(phrase, {
          dollarStatus: "up",
          price: coin.value,
          time: coin.time,
          change: variation.toFixed(2),
          percent: percentageChange,
        });

        await this._twitterRepository.sendTweet(message);

        coin.variation = variation.toString();
        coin.percentageChange = percentageChange;

        await this._dollarRepository
          .update({
            id: DOLLAR_OBJECTID,
            ...coin,
          })
          .catch((err) => console.log(err));

        console.log("tweet enviado - Subiu 😱");
        break;
      }

      case Number(coin.value) < Number(dollar.value): {
        const variation = Number(dollar.value) - Number(coin.value);

        const percentageChange = (
          (variation / Number(dollar.value)) *
          100
        ).toFixed(2);

        const message = this._getAleatoryMessage(phrase, {
          dollarStatus: "down",
          price: coin.value,
          time: coin.time,
          change: variation.toFixed(2),
          percent: percentageChange,
        });

        await this._twitterRepository.sendTweet(message);

        coin.variation = variation.toString();
        coin.percentageChange = percentageChange;

        await this._dollarRepository
          .update({
            id: DOLLAR_OBJECTID,
            ...coin,
          })
          .catch((err) => console.log(err));

        console.log("tweet enviado - Caiu 😁");
        break;
      }

      default:
        break;
    }

    const date = new Date();
    console.log(
      `Executado às: ${date.toLocaleTimeString(
        "pt-BR"
      )} em ${date.toLocaleDateString("pt-BR")}`
    );
  }
}
