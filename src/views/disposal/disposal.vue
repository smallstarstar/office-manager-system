<template>
  <div>
    <div class="event-sop">
      <SideMenu :listDataMenu="listDataMenu" />
      <div class="container-view">
        <div class="container">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </div>
        <div class="footer_button">
          <AddRecord />
        </div>
      </div>
      <div>
        <EventCard />
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
import AddRecord from "@/components/disposal-footer-button/add-record/index.vue";

@Component({
  components: {
    SideMenu,
    TimeSheet,
    EventCard,
    AddRecord
  }
})
export default class Disposal extends Vue {
  private listDataMenu: any = [];
  created() {
    this.listDataMenu = [
      {
        routerName: "信息审核",
        path: "/home/disposal/reviewInfo",
        icon: "el-icon-document-remove"
      },
      {
        routerName: "查看资源",
        path: "/home/disposal/resourceView",
        icon: "el-icon-document-copy"
      },
      {
        routerName: "物资跟踪",
        path: "/home/disposal/resourceTrack",
        icon: "el-icon-reading"
      },
      {
        routerName: "查看报告",
        path: "/home/disposal/resourceLook",
        icon: "el-icon-film"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.event-sop {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
}
.container-view {
  width: 70%;
  .container {
    padding: 10px;
    width: 97%;
    height: 430px;
  }
  .footer_button {
    width: 100%;
    margin-top: 10px;
    margin-left:10px;
  }
}
</style>