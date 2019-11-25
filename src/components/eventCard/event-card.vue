<template>
  <div>
    <div class="card">
      <div class="id" :title="eventInfo.id">{{eventInfo.id}}</div>
      <div class="id" :title="eventInfo.address">{{eventInfo.address}}</div>
      <div class="stutas">{{utilServices.statusChange(eventInfo.disposalStatus)}}</div>
      <div class="backButton">
        <i class="el-icon-back" title="返回列表" @click="goBack()"></i>
      </div>
    </div>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import utilServices from '@/utils/utils-services';

@Component({
  components: {}
})
export default class EventCard extends Vue {
  @Getter("eventInfo")
  eventInfo!: any;

  private utilServices: any = utilServices;
  // 路由跳转
  goBack() {
    this.$router.push(this.eventInfo.router);
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 300px ;
  height: 120px;
  border: 1px solid red;
  position: relative;
  .id {
    width: 290px;
    font-size: 17px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.backButton {
  position: absolute;
  height: 30px;
  width: 50px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #f2784b;
  line-height: 30px;
  right: 10px;
  top: 70px;
  .el-icon-back {
    font-size: 30px;
    color: #f2784b;
    cursor: pointer;
  }
}
.stutas {
  width: 100px;
  position: absolute;
  top:80px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  left: 20px;
}
</style>