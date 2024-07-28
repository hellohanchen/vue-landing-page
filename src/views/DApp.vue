<template>
    <Header/>

    <AppBanner v-if="!isConnected"/>

    <div v-if="isConnected" id="stats" class="mx-auto px-5 bg-black">
        <section class="py-16 pt-18">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="(stats, index) in appStats" :key="stats.id" class="shadow-lg rounded-lg lg:mb-10 bg-white">
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6 text-black">{{ stats.title }}</h3>
                    <h3 class="text-xl font-theme-heading font-medium text-center mt-6 text-gray-700">{{ stats.value }}</h3>
                    <div class="my-7">
                        <img class="w-full" src="/images/bg-dots.svg" alt="Dot Backaground" />
                    </div>
                    <h3 class="text-xl font-theme-heading font-medium text-center mt-6 text-black">{{stats.operation}}: ${{ stats.inputValue.toFixed(2) }}</h3>
                    <VueNumberInput v-model="stats.inputValue" :min="0" :max="stats.value" inline controls></VueNumberInput>
                    <div class="flex justify-center mb-8">
                        <BannerButton :btn-click="stats.onClick" class="text-sm" :dark="true" :transparent="false" :title="stats.buttonCaption" />
                    </div>
                </div>
            </div>
        </section>
    </div>

    <ContractSection />

    <Footer />
</template>

<script>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
import {useWeb3ModalAccount, useWeb3ModalProvider} from '@web3modal/ethers/vue'
import {watch, ref, onMounted} from "vue";
import {BrowserProvider, Contract, formatUnits, JsonRpcProvider} from "ethers";
import HomeStatsCard from "@/components/HomeStatsCard.vue";
import VueNumberInput from '@chenfengyuan/vue-number-input';
import Button from "@/components/Button.vue";
import AppBanner from "@/components/AppBanner.vue";
import BannerButton from "@/components/BannerButton.vue";
import ContractSection from "@/sections/ContractSection.vue";

export default {
    name: 'DApp',
    components: {
        ContractSection,
        BannerButton,
        AppBanner,
        Button,
        HomeStatsCard,
        VueNumberInput,
        Header,
        Footer
    },
    props: {},
    setup() {
        const {address, chainId, isConnected} = useWeb3ModalAccount()

        const usdcBalance = ref(0.0);
        const depositAmount = ref(0.0);
        const approvedAmount = ref(0.0);
        const vouched = ref(false);
        const depositValue = ref(0.0);
        const withdrawValue = ref(0.0);
        const approveValue = ref(0.0);
        const appStats = ref([])

        const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
        const sssAddress = '0x46c5264728af4dbe274929f9509fbeabf8cca2c9';

        let readUsdcContract = null;
        let readSssContract = null;

        const loadUsdc = async (newIC, _) => {
            // The ERC-20 Contract ABI, which is a common contract interface
            // for tokens (this is the Human-Readable ABI format)
            const usdcAbi = [
                "function balanceOf(address) public view returns (uint256)",
                "function allowance(address,address) public view returns (uint256)",
            ];

            const rpcProvider = new JsonRpcProvider('https://cloudflare-eth.com')
            // The Contract object
            readUsdcContract = new Contract(usdcAddress, usdcAbi, rpcProvider)

            // The ERC-20 Contract ABI, which is a common contract interface
            // for tokens (this is the Human-Readable ABI format)
            const sssAbi = [
                "function getDeposit(address) public view returns (uint256)",
                "function hasVouched(address) public view returns (bool)",
            ];

            // The Contract object
            readSssContract = new Contract(sssAddress, sssAbi, rpcProvider)

            if (newIC) {
                usdcBalance.value = parseFloat(formatUnits(await readUsdcContract.balanceOf(address.value), 6));
                approvedAmount.value = parseFloat(formatUnits(await readUsdcContract.allowance(address.value, sssAddress), 6));


                depositAmount.value = parseFloat(formatUnits(await readSssContract.getDeposit(address.value), 6));
                vouched.value = await readSssContract.hasVouched(address.value);
            }
        };

        watch(isConnected, loadUsdc)

        onMounted(() => {
            loadUsdc(isConnected.value, false);
        });

        const getSigner = async () => {
            const walletProvider = useWeb3ModalProvider()
            const provider = new BrowserProvider(walletProvider.walletProvider.value)

            return await provider.getSigner()
        }

        const approveToken = async () => {
            const usdcAbi = [
                "function approve(address,uint256) public returns (bool)",
            ];

            const signer = await getSigner();

            // The Contract object
            const writeUsdcContract = new Contract(usdcAddress, usdcAbi, signer)

            // approve USDC amount
            await writeUsdcContract.approve(sssAddress, approveValue.value * 1000000);

            // update approved USDC amount
            approvedAmount.value = parseFloat(formatUnits(await readUsdcContract.allowance(address.value, sssAddress), 6));
        }

        const depositToken = async () => {
            const sssAbi = [
                "function deposit(uint256 amount) public returns ()",
            ];

            const signer = await getSigner();

            // The Contract object
            const writeSssContract = new Contract(sssAddress, sssAbi, signer)

            // deposit USDC amount
            await writeSssContract.deposit(depositValue.value * 1000000);

            // update deposited amount
            depositAmount.value = parseFloat(formatUnits(await readSssContract.getDeposit(address.value), 6));
        }

        const withdrawToken = async () => {
            const sssAbi = [
                "function withdraw(uint256 amount) public returns ()",
            ];

            const signer = await getSigner();

            // The Contract object
            const writeSssContract = new Contract(sssAddress, sssAbi, signer)

            // deposit USDC amount
            await writeSssContract.withdraw(withdrawValue.value * 1000000);

            // update deposited amount
            depositAmount.value = parseFloat(formatUnits(await readSssContract.getDeposit(address.value), 6));
        }

        appStats.value.push({
            id: 1,
            title: "USDC Balance",
            value: usdcBalance,
            onClick: approveToken,
            buttonCaption: "Approve",
            inputValue: approveValue,
            operation: "USDC to approve"
        })
        appStats.value.push({
            id: 2,
            title: "Approved USDC",
            value: approvedAmount,
            onClick: depositToken,
            buttonCaption: "Deposit",
            inputValue: depositValue,
            operation: "USDC to deposit"
        })
        appStats.value.push({
            id: 3,
            title: "Deposited USDC",
            value: depositAmount,
            onClick: withdrawToken,
            buttonCaption: "Withdraw",
            inputValue: withdrawValue,
            operation: "USDC to withdraw"
        })

        return {
            isConnected,
            usdcBalance,
            depositAmount,
            approvedAmount,
            vouched,
            approveValue,
            depositValue,
            withdrawValue,
            approveToken,
            depositToken,
            withdrawToken,
            appStats
        }
    }
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: center;
    background-color: #000;
    padding: 1rem;
}

.nav a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
}

.nav a:hover {
    text-decoration: underline;
}

.the-home-stats {
    @media #{$media-min-tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.the-home-stats__info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media #{$media-phone-L} {
        justify-content: center;
    }
}

.input-fields {
    display: flex;
    flex-direction: column;
    max-width: 25%;
    width: 100%;
}
</style>
