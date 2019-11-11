<template>
  <div class="loginContent">
    <div class="login-form">
      <div class="word">登录</div>
      <div v-if="showClient">
        <el-form
          :model="userInfo"
          :rules="validatorRules"
          ref="userInfo"
          :hide-required-asterisk="true"
        >
          <el-form-item class="userName" label="用户名" :prop="validatorName.userName">
            <el-input v-model="userInfo.userName"></el-input>
          </el-form-item>
          <el-form-item class="password" label="密码" :prop="validatorName.password">
            <el-input v-model="userInfo.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="remember">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="buttonSub"
              type="primary"
              :loading="loading"
              @click="login('userInfo')"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="borderClient" v-if="!showClient">
        <div class="wordName">点击头像登录</div>
        <div class="img" @click="subLogin()">
          <div class="imgWord">{{userInfo.userName[0].toUpperCase()}}</div>
        </div>
        <div class="changeLogin" @click="changeLogin()">
          <i class="el-icon-sort"></i>
          <span>用户名密码登录</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ValidatorName } from "@/common/enums/validator-name";
import ValidatorRules from "@/utils/validator-rules";
import { Action } from "vuex-class";
@Component({
  components: {}
})
export default class LoginComponent extends Vue {
  private userInfo: any = {};
  private validatorName: any = ValidatorName;
  private validatorRules: any = ValidatorRules;
  private loading: Boolean = false;
  private remember: Boolean = false;
  private showClient: any = false;
  @Action("setUserInfo") setUserInfo!: any;
  created() {
    // 读取localStorage的信息存在则另外一种方式登录--微信的登录方式
    const user: any = localStorage.getItem("userInfoRember") ? true : false;
    const userInfo: any = localStorage.getItem("userInfoRember");
    const data = JSON.parse(userInfo);
    if (user && data.remembered) {
      // 点击头像登录
      this.showClient = false;
      this.userInfo = data;
    } else {
      // 输入用户名登录
      this.showClient = true;
    }
  }
  login(userInfo: any) {
    (this.$refs[userInfo] as any).validate((valid: any) => {
      if (!valid) {
        return;
      } else {
        if (this.remember) {
          // 将信息存入localStorage
          const remember: any = {};
          remember.remembered = true;
          const object = { ...this.userInfo, ...remember };
          localStorage.setItem("userInfoRember", JSON.stringify(object));
        }
        this.loginForm();
      }
    });
  }
  subLogin() {
    // 点击登录
    this.loginForm();
  }
  changeLogin() {
    // 清空localStorage
    localStorage.removeItem("userInfoRember");
    this.showClient = true;
    this.userInfo = {};
  }
  //
  loginForm() {
    // 将数据存入store中
    this.setUserInfo(this.userInfo);
    localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    const token: any = "123456";
    localStorage.setItem("token", JSON.stringify(token));
    this.$router.push({
      path: "/home/content"
    });
    this.$message({
      type:'success',
      message:'欢迎' + this.userInfo.userName + '登录'
    })
  }
}
</script>

<style lang="scss">
@import "./loginComponent.scss";
</style>