<template>
  <div>
    <div class="table_container">
      <div class="container_top">
          <ResourceAdd />
      </div>
      <div class="container_body">
          <ResourceTable :tableData='tableData'/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResourceAdd from "./resource-add.vue";
import ResourceTable from './resource-table.vue';
@Component({
  components: {
    ResourceAdd,
    ResourceTable
  }
})
export default class ResourceConfig extends Vue {
    private tableData: any = [];
}
</script>

<style lang="scss" scoped>

</style>