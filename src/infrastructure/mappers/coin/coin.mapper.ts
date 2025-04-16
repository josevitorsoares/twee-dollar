import type { CoinEntity, DollarEntity } from "src/domain/entity";

export class CoinMapper {
  static toDomain(input: DollarEntity): CoinEntity {
    const variation = Number(input.USDBRL.varBid).toFixed(3);
    const percentageChange = Number(input.USDBRL.pctChange).toFixed(3);

    const value = Number(input.USDBRL.ask).toFixed(2);

    const date = new Date(input.USDBRL.create_date);
    const time = `${date.getHours()}:${date.getMinutes()}`;

    return {
      value,
      variation: Number(variation) > 0 ? `+${variation}` : variation,
      percentageChange:
        Number(percentageChange) > 0
          ? `+${percentageChange}`
          : percentageChange,
      time,
    };
  }
}
