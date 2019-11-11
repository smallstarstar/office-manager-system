<template>
  <div>
    <div class="content">
      <div class="top">
        <div class="top_left">{{userInfo.userName[0].toUpperCase()}}</div>
        <div>{{userInfo.userName}}</div>
      </div>
      <div class="body_content">
        <span class="up_card">上班打卡</span>
        <div class="up_word">
          <div class="word" v-if="playTime.length !== 0">{{playTime[0].time}}</div>
        </div>
        <div class="play_time" @click="chooseTime()">
          <div class="time_number">{{now.slice(10,19)}}</div>
        </div>
        <span class="up_card">下班打卡</span>
        <div class="up_word">
          <div class="word" v-if="playTime.length === 2">{{playTime[1].time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import timeFormat from "@/utils/timeFormat";

@Component({})
export default class TimePlay extends Vue {
  @Getter("userInfo")
  userInfo!: any;
  @Getter("playTime")
  playTime!: any;
  @Action("setPlayTime")
  setPlayTime!: any;
  private now: any = timeFormat.getCurrentTime();
  private interval: any;
  private upTime: any;
  mounted() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.now = timeFormat.getCurrentTime();
    }, 1000);
  }
  chooseTime() {
    let obj: any = {};
    obj.count = 1;
    obj.time = this.now;
    this.setPlayTime(obj);
    if (this.playTime.length < 2) {
      this.$message({
        type: "success",
        message: "打卡成功"
      });
    } else {
      this.$message({
        type:'warning',
        message:'今日打卡结束'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./time-play.scss";
</style>