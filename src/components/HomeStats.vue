<template>
  <div class="the-home-stats">
    <div class="the-home-stats__info">
      <HomeStatsCard
          title="Funders"
          :stats="totalSponsor"
      />
      <HomeStatsCard
          title="Deposit"
          :stats="totalDeposit"
      />
      <HomeStatsCard
          title="Vouchers"
          :stats="totalVouch"
      />
      <HomeStatsCard
          title="Active"
          :stats="isOpen"
      />
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import HomeStatsCard from "@/components/HomeStatsCard.vue";
import {Contract, formatUnits, JsonRpcProvider} from 'ethers'

export default {
  components: {
    HomeStatsCard,
  },
  setup() {
    const totalSponsor = ref(0.0);
    const totalDeposit = ref(0.0);
    const totalVouch = ref(0.0);
    const isOpen = ref(true);

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
      isOpen.value = await sssContract.isOpened();
    };

    onMounted(() => {
      initWeb3();
    });

    return {
      totalSponsor,
      totalDeposit,
      totalVouch,
      isOpen
    };
  },
};
</script>

<style lang="scss" scoped>
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
</style>
