export const MAINNET = "kaiyo-1";
export const TESTNET = "harpoon-4";
export const LOCALNET = "localkujira";
export const TERRA = "phoenix-1";
export const NETWORKS = {
    [TESTNET]: "Testnet",
    [MAINNET]: "Mainnet",
    [LOCALNET]: "Local",
    [TERRA]: "Terra"
};
export const RPCS = {
    [TESTNET]: [
        // "https://rpc.harpoon.kujira.setten.io",
        "https://kujira-testnet-rpc.polkachu.com",
        "https://test-rpc-kujira.mintthemoon.xyz",
        "https://dev-rpc-kujira.mintthemoon.xyz",
    ],
    [MAINNET]: [
        "https://rpc.mantadao.app"
        // "https://kujira-mainnet-rpc.autostake.com",
        // "https://kujira-rpc.ibs.team",
        // "https://kujira-rpc.nodes.defiantlabs.net",
        // "https://kujira-rpc.openbitlab.com",
        // "https://kujira-rpc.theamsolutions.info",
        // "https://kujira.rpc.ghostinnet.com",
        // "https://kujira.rpc.kjnodes.com",
        // "https://rpc-kujira.capybaralabs.com/",
        // "https://rpc-kujira.mintthemoon.xyz",
        // "https://rpc-kujira.mms.team",
        // "https://rpc-kujira.rorcualnodes.com",
        // "https://rpc-kujira.starsquid.io",
        // "https://rpc-kujira.synergynodes.com",
        // "https://rpc.kujira.rektdao.club",
        // "https://kuji-rpc.kleomedes.network",
        // "https://kujira-rpc.lavenderfive.com",
        // "https://kujira-rpc.polkachu.com",
        // "https://rpc-kujira.whispernode.com",
        // "https://rpc.kaiyo.kujira.setten.io",
    ],
    [LOCALNET]: ["http://localhost:26657"],
    "gravity-bridge-3": [
        "https://gravity-rpc.synergynodes.com",
        "https://gravitybridge.rpc.kjnodes.com",
        "https://gravitybridge-rpc.lavenderfive.com",
    ],
    [TERRA]: [
        "https://rpc.terrav2.ccvalidators.com:443/",
        "https://terra2-rpc.lavenderfive.com:443",
        "https://rpc-terra2.whispernode.com:443",
        "https://phoenix-rpc.terra.dev:443",
        "https://terra-phoenix-rpc.highstakes.ch:26657/"
    ],
};
const kujiraChainInfo = (chainId, chainName, rpc, rest, fees = []) => ({
    chainId,
    chainName,
    rpc,
    rest,
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "kujira",
        bech32PrefixAccPub: "kujira" + "pub",
        bech32PrefixValAddr: "kujira" + "valoper",
        bech32PrefixValPub: "kujira" + "valoperpub",
        bech32PrefixConsAddr: "kujira" + "valcons",
        bech32PrefixConsPub: "kujira" + "valconspub",
    },
    currencies: [
        {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira",
        },
        ...fees,
    ],
    feeCurrencies: [
        {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira",
        },
        ...fees,
    ],
    stakeCurrency: {
        coinDenom: "KUJI",
        coinMinimalDenom: "ukuji",
        coinDecimals: 6,
        coinGeckoId: "kujira",
    },
    coinType: 118,
});
const terraChainInfo = (chainId, chainName, rpc, rest, fees = []) => ({
    chainId,
    chainName,
    rpc,
    rest,
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "terra",
        bech32PrefixAccPub: "terra" + "pub",
        bech32PrefixValAddr: "terra" + "valoper",
        bech32PrefixValPub: "terra" + "valoperpub",
        bech32PrefixConsAddr: "terra" + "valcons",
        bech32PrefixConsPub: "terra" + "valconspub",
    },
    currencies: [
        {
            coinDenom: "LUNA",
            coinMinimalDenom: "uluna",
            coinDecimals: 6,
            coinGeckoId: "terra-luna-2",
        },
        ...fees,
    ],
    feeCurrencies: [
        {
            coinDenom: "LUNA",
            coinMinimalDenom: "uluna",
            coinDecimals: 6,
            coinGeckoId: "terra-luna-2",
        },
        ...fees,
    ],
    stakeCurrency: {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
    },
    coinType: 118,
});
export const CHAIN_INFO = {
    [TERRA]: terraChainInfo(TERRA, "Terra Mainnet", "https://terra2-rpc.lavenderfive.com:443", "https://test-lcd-kujira.mintthemoon.xyz", [
        {
            coinDenom: "LUNA",
            coinMinimalDenom: "uluna",
            coinDecimals: 6,
            coinGeckoId: "terra-luna-2",
            gasPriceStep: {
                low: 0.00125,
                average: 0.0025,
                high: 0.00375,
            },
        },
    ]),
    [TESTNET]: kujiraChainInfo(TESTNET, "Kujira Testnet", "https://test-rpc-kujira.mintthemoon.xyz", "https://phoenix-lcd.terra.dev", [
        {
            coinDenom: "DEMO",
            coinMinimalDenom: "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo",
            coinDecimals: 6,
            coinGeckoId: "kujira",
            gasPriceStep: {
                low: 0.00125,
                average: 0.0025,
                high: 0.00375,
            },
        },
    ]),
    [LOCALNET]: kujiraChainInfo(LOCALNET, "Kujira Local", "http://localhost:26657", "http://localhost:1317"),
    [MAINNET]: kujiraChainInfo(MAINNET, "Kujira", "https://rpc.cosmos.directory/kujira", "https://rest.cosmos.directory/kujira", [
        {
            coinDenom: "USK",
            coinMinimalDenom: "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
            coinDecimals: 6,
            coinGeckoId: "usk",
            gasPriceStep: {
                low: 0.0015,
                average: 0.0025,
                high: 0.0035,
            },
        },
        {
            coinDenom: "axlUSDC",
            coinMinimalDenom: "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
            coinDecimals: 6,
            coinGeckoId: "usdc",
            gasPriceStep: {
                low: 0.0015,
                average: 0.0025,
                high: 0.0035,
            },
        },
        {
            coinDenom: "ATOM",
            coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            coinDecimals: 6,
            coinGeckoId: "cosmoshub",
            gasPriceStep: {
                low: 0.000125,
                average: 0.000225,
                high: 0.000325,
            },
        },
        {
            coinDenom: "CMDX",
            coinMinimalDenom: "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
            coinDecimals: 6,
            coinGeckoId: "comdex",
            gasPriceStep: {
                low: 0.00652,
                average: 0.00852,
                high: 0.01052,
            },
        },
        {
            coinDenom: "EVMOS",
            coinMinimalDenom: "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
            coinDecimals: 18,
            coinGeckoId: "evmos",
            gasPriceStep: {
                low: 617283951,
                average: 717283951,
                high: 817283951,
            },
        },
        {
            coinDenom: "JUNO",
            coinMinimalDenom: "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
            coinDecimals: 6,
            coinGeckoId: "juno",
            gasPriceStep: {
                low: 0.000288,
                average: 0.000388,
                high: 0.000488,
            },
        },
        {
            coinDenom: "OSMO",
            coinMinimalDenom: "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
            gasPriceStep: {
                low: 0.00126,
                average: 0.0025,
                high: 0.00375,
            },
        },
        {
            coinDenom: "SCRT",
            coinMinimalDenom: "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
            coinDecimals: 6,
            coinGeckoId: "secret",
            gasPriceStep: {
                low: 0.00137,
                average: 0.00237,
                high: 0.00337,
            },
        },
        {
            coinDenom: "STARS",
            coinMinimalDenom: "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
            coinDecimals: 6,
            coinGeckoId: "stars",
            gasPriceStep: {
                low: 0.0488,
                average: 0.0588,
                high: 0.0688,
            },
        },
        {
            coinDenom: "wAVAX",
            coinMinimalDenom: "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
            coinDecimals: 18,
            coinGeckoId: "avalanche-2",
            gasPriceStep: {
                low: 78492936,
                average: 88492936,
                high: 98492936,
            },
        },
        {
            coinDenom: "wETH",
            coinMinimalDenom: "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
            coinDecimals: 18,
            coinGeckoId: "ethereum",
            gasPriceStep: {
                low: 964351,
                average: 1064351,
                high: 1164351,
            },
        },
    ]),
};
export const NETWORK_DEFAULT = "kaiyo-1";
