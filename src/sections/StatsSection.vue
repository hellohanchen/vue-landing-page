<script>
import {ref, onMounted} from 'vue';
import HomeStatsCard from "@/components/HomeStatsCard.vue";
import {Contract, formatUnits, JsonRpcProvider} from 'ethers'

export default {
    components: {
        HomeStatsCard,
    },
    setup() {
        const contractStats = ref([]);
        const totalSponsor = ref(0.0);
        const totalDeposit = ref(0.0);
        const totalVouch = ref(0.0);

        const initWeb3 = async () => {
            const contractAddress = '0x46c5264728af4dbe274929f9509fbeabf8cca2c9';

            // The ERC-20 Contract ABI, which is a common contract interface
            // for tokens (this is the Human-Readable ABI format)
            const abi = [
                "function getTotalSponsor() public view returns (uint256)",
                "function getTotalDeposit() public view returns (uint256)",
                "function getTotalVouch() public view returns (uint256)",
                "function isOpened() public view returns (bool)",
            ];

            const ethersProvider = new JsonRpcProvider('https://cloudflare-eth.com')
            // The Contract object
            const sssContract = new Contract(contractAddress, abi, ethersProvider)
            totalSponsor.value = parseFloat(formatUnits(await sssContract.getTotalSponsor(), 0));
            totalDeposit.value = parseFloat(formatUnits(await sssContract.getTotalDeposit(), 6));
            totalVouch.value = parseFloat(formatUnits(await sssContract.getTotalVouch(), 0));
        };

        onMounted(() => {
            initWeb3();
        });

        contractStats.value.push({
            id: 1,
            title: "Total Sponsors",
            value: totalSponsor,
        })
        contractStats.value.push({
            id: 2,
            title: "Total Deposited USDC",
            value: totalDeposit,
        })
        contractStats.value.push({
            id: 3,
            title: "Total Vouchers",
            value: totalVouch,
        })

        return {
            contractStats
        };
    },
};
</script>

<template>
    <div id="stats" class="myContainer mx-auto px-5 md:w-4/5">
        <section class="py-8 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-center text-black">LIVE STATS</h2>
<!--                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7">We've got more browsers in pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>-->
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                <div v-for="(stats, index) in contractStats" :key="stats.id" class="shadow-lg rounded-lg lg:mb-10 bg-black py-6">
                    <h3 class="text-2xl font-theme-heading font-medium text-center mt-6 text-white">{{ stats.title }}</h3>
                    <h3 class="text-2xl font-theme-heading font-bold font-medium text-center mt-6 text-white">{{ stats.value }}</h3>
                </div>
            </div>
        </section>
    </div>
</template>
