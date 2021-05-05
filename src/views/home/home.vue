<!--  -->
<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home.js";
import HomeSwiper from "./homeSwiper/homeSwiper";
export default {
  created() {
    // 获取轮播图数据
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.banner, this.recommend);
    });
  },
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  }
};
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-tent);
  color: #fff;
}
</style>
