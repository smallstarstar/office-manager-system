<template>
  <div>
    <SideMenu :listDataMenu="listDataMenu" />
    <div class="container">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SideMenu from "@/components/home/sideMenu.vue";

@Component({
  components: {
    SideMenu
  }
})
export default class ListData extends Vue {
  private listDataMenu: any = [];
  created() {
    this.listDataMenu = [
      {
        routerName: "用户信息",
        path: "/home/homelist/userInfo",
        icon: "el-icon-user-solid",

      },
       {
        routerName: "待审列表",
        path: "/home/homelist/shopInfo",
        icon: "el-icon-s-check",
        
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 112%;
  height: 500px;
  margin-left:120px;
  padding: 10px;
  background: #e2e2e2;
}
</style>