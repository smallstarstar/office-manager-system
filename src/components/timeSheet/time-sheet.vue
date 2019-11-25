<template>
  <div>
    <div class="scrollbar" id="plane-scroll">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in timeSheetInfo"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
        <div class="timeshow">
           {{timeFormat.changeStateTime(activity.cTime)}}
        </div>
        {{utilServices.getRoleInfo(activity.role)}}
        <span class="perosonal">{{activity.personal}}</span>
        {{utilServices.changeTimeSheetKeys(activity.messagekey)}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import rxevent from "pubsub-js";
import EventKeys from "@/common/event-keys/eventKeys";
import eventInfoServices from "@/api/eventInfoServices";
import { Getter } from "vuex-class";
import utilServices from '@/utils/utils-services';
import timeFormat from "@/utils/timeFormat";


@Component({
  components: {}
})
export default class TimeSheet extends Vue {
  @Getter("eventInfo")
  eventInfo!: any;
  private utilServices: any = utilServices;
  private timeFormat: any = timeFormat;
  private timeSheetInfo: any = [];
  async mounted() {
    await this.getInitData(this.eventInfo.id);
    this.scroller();
    // 刷新时间轴
    rxevent.subscribe(EventKeys.REFRESHTIMESHEET, async (name: any, val: any) =>{
      await this.getInitData(this.eventInfo.id);
      this.scroller();
    });
  }
  scroller() {
    this.$nextTick(() => {
      const planeScroler: any = document.getElementById(
        "plane-scroll"
      ) as HTMLElement;
      planeScroler.scrollTop = planeScroler.scrollHeight;
    });
  }

  // 获取时间轴信息
  async getInitData(eventId: any) {
    this.timeSheetInfo = await eventInfoServices.getTimeSheetInfoByEventId(eventId);
    this.timeSheetInfo.forEach((e: any)=>{
      e.color = '#0bbd87';
      e.large = 'size';
      e.icon = 'el-icon-more  '
    });
  }
}
</script>

<style lang="scss" scoped>
.scrollbar {
  margin-top: 2px;
  width: 300px;
  height: 370px;
  overflow-y: auto;
  border: 1px solid #f2784b;
  padding-top: 10px;
  .timeshow {
    font-size: 17px;
    color: #f2784b;
  }
  .perosonal {
    font-size: 17px;
    color: #f2784b;
  }
}
</style>