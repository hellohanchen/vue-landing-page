<template>
    <router-view/>
</template>

<script>
import {createWeb3Modal, defaultConfig} from '@web3modal/ethers/vue'

export default {
    name: 'App',
    components: {},
    setup() {
        // 1. Get projectId from https://cloud.walletconnect.com
        const projectId = '102b94965afc925bcaeba0f4cb2a3514'

        // 2. Set chains
        const mainnet = {
            chainId: 1,
            name: 'Ethereum',
            currency: 'ETH',
            explorerUrl: 'https://etherscan.io',
            rpcUrl: 'https://cloudflare-eth.com'
        }

        // 3. Create your application's metadata object
        const metadata = {
            name: 'Project GOAT',
            description: 'Project GOAT',
            url: 'https://project-goat.com', // origin must match your domain & subdomain
            icons: ['https://avatars.githubusercontent.com/u/37784886']
        }

        // 4. Create Ethers config
        const ethersConfig = defaultConfig({
            /*Required*/
            metadata,

            /*Optional*/
            enableEIP6963: true, // true by default
            enableInjected: true, // true by default
            enableCoinbase: true, // true by default
            rpcUrl: '...', // used for the Coinbase SDK
            defaultChainId: 1, // used for the Coinbase SDK
        })

        // 5. Create a Web3Modal instance
        const modal = createWeb3Modal({
            ethersConfig,
            chains: [mainnet],
            projectId,
            enableAnalytics: true, // Optional - defaults to your Cloud configuration
            enableOnramp: true, // Optional - false as default
        })

        {
            return modal
        }
    },
}
</script>

<style>
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
}

#app {
    text-align: center;
}
</style>
