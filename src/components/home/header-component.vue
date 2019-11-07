<template>
  <div>
    <div class="navBar">
      <span class="word">后台管理首页</span>
      <!-- <span v-for="(item, index) in menuBar" :key="index">

      </span> -->
    </div>
    <div class="userInfo">
      <div class="img">{{userInfo.userName[0].toUpperCase()}}</div>
      <div class="name">{{userInfo.userName}}</div>
    </div>
    <div class="systemTime">{{now}}</div>
    <div class="goBackSystem" title="退出" @click="systemOut()">
      <i class="el-icon-switch-button"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import timeFormat from "@/utils/timeFormat";
import { Getter } from "vuex-class";
import textServices from '@/api/textServices';
@Component({
  components: {}
})
export default class HeaderComponent extends Vue {
  private now: any = timeFormat.getCurrentTime();
  private interval: any;
  @Getter("userInfo") userInfo!: any;
 async mounted() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.now = timeFormat.getCurrentTime();
    }, 1000);
    const data = await textServices.text();
    console.log(data);
  }

  destoryed() {
    clearInterval(this.interval);
  }
  // 退出系统
  systemOut() {
    this.$confirm("是否退出系统?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      center: true
    })
      .then(() => {
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        // 清除token
        localStorage.removeItem("token");
        // 清除缓存
        localStorage.removeItem("userInfo");
        // 路由跳转
        this.$router.push({ path: "/" });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "我在想想"
        });
      });
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  position: absolute;
  width: 30%;
  height: 60px;
  border:1px solid red;
  left:0;
  .word {
    font-size: 20px;
    line-height: 60px;
    padding-left:10px;
   cursor: pointer;
  }
}
.userInfo {
  position: absolute;
  width: 150px;
  height: 60px;
  right: 20%;
  .img {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    background-color: #f2784b;
    font-size: 30px;
    margin-top: 5px;
    cursor: pointer;
  }
  .name {
    position: absolute;
    right: 0;
    width: 100px;
    height: 40px;
    text-align: center;
    top: 20px;
  }
}
.systemTime {
  float: right;
  margin-right: 50px;
  margin-top: 20px;
}
.goBackSystem {
  position: absolute;
  right: 10px;
  .el-icon-switch-button {
    font-size: 30px;
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    font-weight: 600;
    color:#fff;
  }
}
</style>