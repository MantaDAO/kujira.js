import { ChainInfo } from "@keplr-wallet/types";
export declare const MAINNET = "kaiyo-1";
export declare const TESTNET = "harpoon-4";
export declare const LOCALNET = "localkujira";
export declare const TERRA = "phoenix-1";
export declare type NETWORK = typeof MAINNET | typeof TESTNET | typeof LOCALNET | typeof TERRA;
export declare const NETWORKS: {
    "harpoon-4": string;
    "kaiyo-1": string;
    localkujira: string;
    "phoenix-1": string;
};
export declare const RPCS: Record<string, string[]>;
export declare const CHAIN_INFO: Record<NETWORK, ChainInfo>;
export declare const NETWORK_DEFAULT = "kaiyo-1";
