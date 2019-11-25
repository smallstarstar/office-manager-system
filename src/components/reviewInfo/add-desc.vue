<template>
  <div>
    <div class="desc_container">
      <div class="left" id="plane-scroller">
        <div class="detail_info" v-for="(item,index) in detailList" :key="index">
          <div class="detail_top">
            <div>{{item.personal}}</div>
            <div>{{item.time}}</div>
          </div>
          <p>{{item.detail}}</p>
        </div>
      </div>
      <div class="right">
        <el-input type="textarea" :rows="5" resize="none" placeholder="请输入...." v-model="addDesc"></el-input>
        <el-button
          type="primary"
          class="button"
          @click="submit()"
          :disabled="disabled"
          v-loading="loading"
        >提 交</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
import eventInfoServices from "@/api/eventInfoServices";
import timeFormat from "@/utils/timeFormat";
import { AddDetailInfo } from "@/models/add-detail-info";
import rxevent from "pubsub-js";
import EventKeys from "@/common/event-keys/eventKeys";


@Component({ components: {} })
export default class AddDesc extends Vue {
  @Getter("userInfo")
  userInfo!: any;
  @Getter("eventInfo")
  eventInfo!: any;
  private addDesc: any = null;
  private disabled: boolean = true;
  private timeFormat: any = timeFormat;
  private detailList: any = [];
  private loading: boolean = false;
  async mounted() {
    await this.getListDetailInfo(this.eventInfo.id);
    this.scroller();
  }
  @Watch("addDesc")
  addDescs(val: any) {
    if (val.trim()) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  // 微信加载底部
  scroller() {
    this.$nextTick(() => {
      const planeScroler: any = document.getElementById(
        "plane-scroller"
      ) as HTMLElement;
      planeScroler.scrollTop = planeScroler.scrollHeight;
    });
  }
  async submit() {
    // 组装数据
    const addDetailInfo = new AddDetailInfo();
    addDetailInfo.detail = this.addDesc.trim();
    addDetailInfo.perId = this.userInfo.id;
    addDetailInfo.personal = this.userInfo.userName;
    addDetailInfo.role = this.userInfo.role;
    addDetailInfo.time = this.timeFormat.getCurrentTime();
    addDetailInfo.eventId = this.eventInfo.id;
    this.loading = true;
    const result = await eventInfoServices.addDetailInfo(addDetailInfo);
    if (result) {
      this.loading = false;
      const messageInfo: any = {
        type: "success",
        message: "添加备注信息成功",
        position: "bottom-right"
      };
      await this.getListDetailInfo(this.eventInfo.id);
      // 刷新时间轴数据
      rxevent.publish(EventKeys.REFRESHTIMESHEET, true);
      this.$notify(messageInfo);
      this.scroller();
      this.addDesc = "";
      this.disabled = true;
    }
  }
  // 获取事件的信息
  async getListDetailInfo(eventId: any) {
    this.detailList = await eventInfoServices.getListDetailInfo(eventId);
  }
}
</script>

<style lang="scss" scoped>
.desc_container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 180px;
  margin-top: 10px;
  border: 1px solid #555;
  .left {
    width: 50%;
    height: 180px;
    overflow-y: auto;
    .detail_info {
      border-bottom: 1px solid #f2784b;
      .detail_top {
        width: 99%;
        margin: auto;
        margin-top: 3px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .right {
    width: 50%;
    height: 180px;
    border-left: 1px solid red;
  }
}
.button {
  float: right;
  margin-top: 10px;
  margin-right: 3px;
}
</style>