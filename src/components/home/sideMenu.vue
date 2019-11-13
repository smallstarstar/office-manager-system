<template>
  <div>
      <div class="side_menu">
        
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

</style>