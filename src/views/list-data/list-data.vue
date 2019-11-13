<template>
  <div>
    <div class="list">
      <div class="menulist">
        <SideMenu :listDataMenu="listDataMenu" />
      </div>
      <div>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SideMenu from "@/components/home/sideMenu.vue";

@Component({
  components: {
    SideMenu
  }
})
export default class ListData extends Vue {
  private listDataMenu: any = [];
}
</script>

<style lang="scss" scoped>
.list {
  .menulist {
    width: 200px;
    height: 500px;
    box-shadow: 1px 0px 0px #ddd;
    background-color: #ddd;
  }
}
</style>