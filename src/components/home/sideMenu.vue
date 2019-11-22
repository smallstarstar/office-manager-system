<template>
  <div>
      <div class="side_menu">
        <router-link v-for="(item,index) in listDataMenu"
         :key="index" 
         :to="item.path"
         class="menu"
         active-class="router-active"
         >
          <i class="iconRouter" :class="item.icon" :title="item.routerName"></i>
        </router-link>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({components:{}})
export default class SideMenu extends Vue {
  @Prop({default:[]})
  listDataMenu: any;
}
</script>


<style lang="scss" scoped>
.side_menu {
  position: relative;
  width: 120px;
  height: 500px;
  background-color: #ddd;
  color: #fff;
}
.iconRouter {
  width: 50px;
  height: 50px;
  border:1px solid #f2784b;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
}
.menu {
  list-style: none;
  float: left;
  width: 71%;
  height: 60px;
  &.router-active {
    background-color: #f2784b;
    .iconRouter {
      color: white;
      background-color: #f2784b;
      border:1px solid #fff;
    }
  }
}
</style>