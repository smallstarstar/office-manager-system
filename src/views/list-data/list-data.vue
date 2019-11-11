<template>
  <div>
      <div>
          <div class="size"></div>
          <div>
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ListData extends Vue {}
</script>

<style lang="scss">
</style>