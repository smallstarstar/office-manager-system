<template>
  <div>
    <el-container>
      <el-header>
        <HeaderComponent></HeaderComponent>
      </el-header>
      <el-container>
        <!-- <el-aside width="201px"></el-aside> -->
        <div class="content">
          <transition name="el-fade-in-linear">
            <router-view></router-view>
          </transition>
        </div>
      </el-container>
      <el-footer class="footer"> 
        <FooterComponent />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderComponent from "./header-component.vue";
import { Action } from "vuex-class";
import FooterComponent from './footer-component.vue';
@Component({
  components: {
    HeaderComponent,
    FooterComponent
  }
})
export default class Home extends Vue {
  @Action("setUserInfo") setUserInfo!: any;
  created() {
    const userInfo: any = localStorage.getItem("userInfo");
    this.setUserInfo(JSON.parse(userInfo));
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
}
.el-footer {
  position: absolute;
  bottom: 0;
  background-color: #b3c0d1;
  width: 100%;
  height: 10px;
}
.content {
  width: 100%;
  height: 500px;
}
</style>
