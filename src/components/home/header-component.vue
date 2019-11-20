<template>
  <div>
    <div class="navBar">
      <span class="word" @click="goBackHome()">后台管理首页</span>
      <div class="naBarDate">
        <span
          v-for="(item, index) in menuBar"
          :key="index"
          class="navBarList"
          @click="chooseItem(item)"
        >
          <router-link :to="item.path" :class="{'isColor':item.color}">{{item.routerName}}</router-link>
        </span>
      </div>
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
import textServices from "@/api/textServices";
import EventKeys from "@/common/event-keys/eventKeys";
import rxEvent from "pubsub-js";
@Component({
  components: {}
})
export default class HeaderComponent extends Vue {
  private now: any = timeFormat.getCurrentTime();
  private interval: any;
  private menuBar: any = [];
  @Getter("userInfo") userInfo!: any;
  async mounted() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.now = timeFormat.getCurrentTime();
    }, 1000);
    const data = await textServices.getMenu();
    this.menuBar = data;
    this.menuBar.forEach((element: any) => {
      element.color = false;
    });

    // 400
    rxEvent.subscribe(EventKeys.PARMAS_ERROR_MESSAGE,  (name: any, val: any) => {
      this.$message.error("参数错误");
    });
    rxEvent.subscribe(EventKeys.DISABLE_MENU_COLOR, (name: any, val: any) => {
      if (val) {
        this.menuBar.forEach((element: any) => {
          element.color = false;
        });
      }
    });
  }

  destoryed() {
    clearInterval(this.interval);
  }
  goBackHome() {
    this.$router.push({
      path: "/home/content"
    });
    this.menuBar.forEach((element: any) => {
      element.color = false;
    });
    this.$forceUpdate();
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
  chooseItem(e: any) {
    this.menuBar.forEach((el: any) => {
      el.color = false;
    });
    e.color = true;
    this.$forceUpdate();
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  position: absolute;
  width: 60%;
  height: 60px;
  left: 0;
  top: -3px;
  .word {
    font-size: 20px;
    line-height: 60px;
    padding-left: 10px;
    cursor: pointer;
  }
  .naBarDate {
    width: 90%;
    height: 60px;
    position: absolute;
    top: 20px;
    left: 24%;
    .navBarList {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .isColor {
    background-color: #f2784b;
    color: #fff;
    padding: 17px;
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
    color: #fff;
  }
}
</style>