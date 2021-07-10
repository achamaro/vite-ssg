<template>
  <div>index</div>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div>{{ item.Use }}</div>
      <div>{{ item.TradePrice }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, shallowRef } from "vue";

type Response = {
  data: Trade[];
  status: string;
};

type Trade = {
  Use: string;
  TradePrice: string;
};

export default defineComponent({
  setup() {
    const list = shallowRef<Trade[]>([{ Use: "test", TradePrice: "2000" }]);
    const load = async () => {
      const result: Response = (
        await axios.get(
          "https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20201&to=20201&city=13102"
        )
      ).data;
      return result.data.slice(0, 10);
    };
    onMounted(async () => {
      list.value = await load();
    });

    return { list, load };
  },
  async serverPrefetch() {
    this.list = await this.load();
  },
});
</script>
