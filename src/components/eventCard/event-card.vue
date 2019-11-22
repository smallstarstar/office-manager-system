<template>
  <div>
    <div class="card">
      <div class="id" :title="eventInfo.id">{{eventInfo.id}}</div>
      <div class="id">{{eventInfo.address}}</div>
      <div class="stutas">处置的状态</div>
      <div class="backButton">
        <i class="el-icon-back" title="返回列表" @click="goBack()"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
  components: {}
})
export default class EventCard extends Vue {
  @Getter("eventInfo")
  eventInfo!: any;
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
  .el-icon-back {
    font-size: 30px;
    color: #f2784b;
    cursor: pointer;
  }
}
</style>