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
            <el-input style="position:fixed;bottom:-9999px"></el-input>
            <el-input v-model="userInfo.userName"></el-input>
          </el-form-item>
          <el-form-item class="password" label="密码" :prop="validatorName.password">
            <el-input type="text" style="display:none"></el-input>
            <el-input v-model="userInfo.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="remember">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              class="buttonSub"
              type="primary"
              v-loading="loading"
              @click="login('userInfo')"
            >登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
        <el-button v-if="showClient"
              class="buttonSub"
              type="success"
            >注 册</el-button>
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
import userLoginServices from "@/api/userLoginServices";
import { LoginCode } from "@/common/enums/login-code";
import configBase from '../../../public/config';

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
  async loginForm() {
    // 将数据存入store中
    const data: any = await userLoginServices.userLoginSystem(
      this.userInfo.userName,
      this.userInfo.password
    );
    console.log(data);
    // 登录成功
    if (data.code === LoginCode.LOGINSUCCESSCODE) {
      if (this.remember) {
        // 将信息存入localStorage
        const remember: any = {};
        remember.remembered = true;
        const object = { ...this.userInfo, ...remember };
        localStorage.setItem("userInfoRember", JSON.stringify(object));
      }
      this.setUserInfo(data.userEntity);
      localStorage.setItem("userInfo", JSON.stringify(data.userEntity));
      const token: any = configBase.mockToken;
      localStorage.setItem("token", JSON.stringify(token));
      this.$router.push({
        path: "/home/content"
      });
      this.$message.success("欢迎" + this.userInfo.userName + "登录");
    }
    if (data.code === LoginCode.LOGINFAILCODE) {
      this.$message.error(data.message);
      // 清空输入框
      this.userInfo = {};
      this.remember = false;
    }
  }
}
</script>

<style lang="scss">
@import "./loginComponent.scss";
</style>