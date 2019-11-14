<template>
  <div>
    <div class="sideMenu">
      <SideMenu :listDataMenu="listDataMenu" />
    </div>
    <div class="container">
      <transition name="el-fade-in-linear">
        <router-view></router-view>
      </transition>
    </div>
    <div class="rightSide">
      <div class="top">
        <EventCard />
      </div>
      <div class="bottom">
        <TimeSheet />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideMenu from "@/components/home/sideMenu.vue";
import TimeSheet from "@/components/timeSheet/time-sheet.vue";
import EventCard from "@/components/eventCard/event-card.vue";
@Component({
  components: {
    SideMenu,
    TimeSheet,
    EventCard
  }
})
export default class Disposal extends Vue {
  private listDataMenu: any = [];
  created() {
    this.listDataMenu = [
      {
        routerName: "审核信息",
        path: "/home/homelist/userInfo",
        icon: "el-icon-document-remove"
      },
      {
        routerName: "审核查看",
        path: "/home/homelist/shopInfo",
        icon: "el-icon-document-copy"
      },
        {
        routerName: "审核通知",
        path: "/home/homelist/userInfo",
        icon: "el-icon-reading"
      },
      {
        routerName: "查看报告",
        path: "/home/homelist/shopInfo",
        icon: "el-icon-film"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 67%;
  height: 500px;
  margin-left: 120px;
  padding: 10px;
  background: #e2e2e2;
}
.rightSide {
  position: absolute;
  width: 300px;
  overflow: hidden;
  height: 500px;
  border: 1px solid #f2784b;
  right: 1px;
  .top {
    width: 100%;
    height: 100px;
    border: 1px solid red;
  }
}
</style>