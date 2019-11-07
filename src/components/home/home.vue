<template>
  <div>
    <el-container>
      <el-header>
        <HeaderComponent></HeaderComponent>
      </el-header>
      <el-container>
        <el-aside width="201px"></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderComponent from "./header-component.vue";
import { Action } from "vuex-class";
@Component({
  components: {
    HeaderComponent
  }
})
export default class Home extends Vue {
  @Action('setUserInfo') setUserInfo!: any;
  created() {
    const userInfo: any = localStorage.getItem('userInfo');
    this.setUserInfo(JSON.parse(userInfo));
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 500px;
}
</style>
