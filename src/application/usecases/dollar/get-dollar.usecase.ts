import { EXTERNAL_API } from "configs/environment/env";
import type {
  DollarEntity,
  IHttpClientService,
  IStorageRepository,
  ITwitterRepository,
} from "src/domain";
import type { IGetDollarUseCase } from "src/domain/usecases";
import { CoinMapper } from "src/infrastructure";
import phrases from "./phrases.json" assert { type: "json" };

export class GetDollarUseCase implements IGetDollarUseCase {
  constructor(
    private readonly _httpClientService: IHttpClientService,
    private readonly _twitterRepository: ITwitterRepository,
    private readonly _storageRepository: IStorageRepository
  ) {}

  private _getAleatoryMessage(
    dollarStatus: "up" | "down",
    price: string,
    time: string,
    change: string,
    percent: string
  ): string {
    const title = phrases.title;

    const opening =
      phrases.openings[dollarStatus][
        Math.floor(Math.random() * phrases.openings[dollarStatus].length)
      ];

    const data = phrases.dataBlocks[
      Math.floor(Math.random() * phrases.dataBlocks.length)
    ]
      .replace(/\{price\}/g, price)
      .replace(/\{time\}/g, time);

    const variation = phrases.variationBlocks[dollarStatus][
      Math.floor(Math.random() * phrases.variationBlocks[dollarStatus].length)
    ]
      .replace(/\{change\}/g, change)
      .replace(/\{percent\}/g, percent);

    const closing =
      phrases.closings[Math.floor(Math.random() * phrases.closings.length)];

    return `${title}\n\n${opening}\n${data}\n${variation}\n${closing}`;
  }

  async execute(): Promise<void> {
    const response = await this._httpClientService.request<DollarEntity>({
      method: "get",
      url: EXTERNAL_API,
    });

    const coin = CoinMapper.toDomain(response.body);

    const storedData = this._storageRepository.readStoredData();

    if (!storedData.dollar.value) {
      this._storageRepository.writeStoredData({
        dollar: {
          value: coin.value,
          percentageChange: "",
          variation: "",
          time: coin.time,
        },
      });

      storedData.dollar = coin;
    }

    switch (true) {
      case coin.value > storedData.dollar.value: {
        const variation = Number(coin.value) - Number(storedData.dollar.value);
        
        const percentageChange = (
          (variation / Number(storedData.dollar.value)) *
          100
        ).toFixed(2);

        const message = this._getAleatoryMessage(
          "up",
          coin.value,
          coin.time,
          variation.toString(),
          percentageChange
        );

        await this._twitterRepository.sendTweet(message);

        coin.variation = variation.toString();
        coin.percentageChange = percentageChange;

        this._storageRepository.writeStoredData({ dollar: coin });

        console.log("tweet enviado - Subiu 😱");
        break;
      }

      case coin.value < storedData.dollar.value: {
        const variation = Number(storedData.dollar.value) - Number(coin.value);

        const percentageChange = (
          (variation / Number(storedData.dollar.value)) *
          100
        ).toFixed(2);
        
        const message = this._getAleatoryMessage(
          "down",
          coin.value,
          coin.time,
          variation.toString(),
          percentageChange
        );

        coin.variation = variation.toString();
        coin.percentageChange = percentageChange;

        await this._twitterRepository.sendTweet(message);

        this._storageRepository.writeStoredData({ dollar: coin });

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
