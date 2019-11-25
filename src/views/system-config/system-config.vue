<template>
  <div>
    <div class="container">
      <div>
        <SideMenu :listDataMenu="listDataMenu" />
      </div>
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideMenu from "@/components/home/sideMenu.vue";

@Component({ components: {
    SideMenu
} })
export default class SystemConfig extends Vue {
  private listDataMenu: Array<Object> = [];
  created() {
    this.listDataMenu = [
      {
        routerName: "资源配置",
        path: "/home/systemConfig/resourceConfig",
        icon: "el-icon-platform-eleme"
      },
      {
          routerName: '路由配置',
          path: '/home/systemConfig/routerConfig',
          icon: 'el-icon-setting'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex: 1;
    .container {
        padding: 10px;
        width: 100%;
    }
}
</style>