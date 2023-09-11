import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { NETWORK } from "./network";
export declare type Pool = {
    address: string;
    owner: string;
    denoms: [Denom, Denom];
    pricePrecision: number;
    decimalDelta: number;
    finContract: string;
    intervals: BigNumber[];
    fee: BigNumber;
    amp: BigNumber;
    margin?: Margin;
};
export declare type PoolResponse = {
    owner: string;
    denoms: string[];
    price_precision: {
        decimal_places: number;
    };
    decimal_delta: number;
    fin_contract: string;
    intervals: string[];
    fee: string;
    amp: string;
};
export declare type Margin = {
    address: string;
    owner: string;
    bowContract: string;
    denoms: [
        {
            denom: Denom;
            decimals: number;
            oracle: string;
        },
        {
            denom: Denom;
            decimals: number;
            oracle: string;
        }
    ];
    vaults: [string | null, string | null];
    orcas: [string | null, string | null];
    maxLtv: BigNumber;
    fullLiquidationThreshold: BigNumber;
    partialLiquidationTarget: BigNumber;
    borrowFee: BigNumber;
};
export declare type MarginResponse = {
    owner: string;
    bow_contract: string;
    denoms: {
        denom: string;
        decimals: number;
        oracle: string;
    }[];
    vaults: (string | null)[];
    orcas: (string | null)[];
    max_ltv: string;
    full_liquidation_threshold: string;
    partial_liquidation_target: string;
    borrow_fee: string;
};
export declare type PositionResponse = {
    holder: string;
    lp_amount: string;
    ltv: string;
    debt_shares: {
        amount: string;
        denom: string;
        ratio: string;
    }[];
};
export declare type Position = {
    holder: string;
    lpAmount: BigNumber;
    ltv: BigNumber;
    debtShares: Record<string, {
        amount: BigNumber;
        denom: Denom;
        ratio: BigNumber;
    }>;
};
export declare const castPosition: (res: PositionResponse) => Position;
export declare const castPool: (address: string, res: PoolResponse, margin?: {
    address: string;
    config: MarginResponse;
} | undefined) => Pool;
export declare const castMargin: (address: string, res: MarginResponse) => Margin;
export declare const POOLS: Record<NETWORK, Record<string, Pool>>;
