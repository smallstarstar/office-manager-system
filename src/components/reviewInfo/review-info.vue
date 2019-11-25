<template>
  <div>
    <div class="container_top">
      <div class="circle"></div>
      <span class="word">查看信息</span>
    </div>
    <div class="container">
      <el-row :gutter="24">
        <el-col :span="6">
          <div>名称</div>
          <div class="name">{{eventInfo.name}}</div>
        </el-col>
        <el-col :span="6">
          <div>类型</div>
          <div class="name">{{eventInfo.subName}}</div> 
        </el-col>
        <el-col :span="6">
          <div>时间</div>
          <div class="name">{{ timeChange.changeStateTime(eventInfo.cTime)}}</div>
        </el-col>
        <el-col :span="6">
          <div>等级</div>
          <div class="name">
            <span :style="utilServices.getColor(+(eventInfo.level))">
             <span style="padding:10px 20px;color:#fff"> {{eventInfo.level}}</span>
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <div>地址</div>
          <div class="desc">{{eventInfo.address}}</div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <div>描述</div>
          <div class="desc">{{eventInfo.desc}}</div>
        </el-col>
      </el-row>
    </div>
    <AddDesc />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import timeFormat from "@/utils/timeFormat";
import AddDesc from './add-desc.vue'; 
import utilServices from '@/utils/utils-services';

@Component({
  components: {
    AddDesc
  }
})
export default class ReviewInfo extends Vue {
  @Getter("eventInfo")
  eventInfo!: any;
  private timeChange: any = timeFormat;
  private utilServices: any = utilServices;
}
</script>

<style lang="scss" scoped>
.container_top {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    .circle {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        border:2px solid #f2784b;
        border-radius: 50%;
    }
    .word {
        margin-left:30px;
        font-size: 20px;
        font-weight: 500;
    }
}
.name {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-indent: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
.desc {
  width: 100%;
  height: 50px;
  text-indent: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>