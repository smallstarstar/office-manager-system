<template>
  <div>
      <div class="container_top">
          <div class="circle"></div>
          <span>查看信息</span>
      </div>
      <div class="container">
          <el-row :gutter="24">
              <el-col :span="8">
                  <div class="name">{{eventInfo.name}}</div>
              </el-col>
          </el-row>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
  components: {}
})
export default class ReviewInfo extends Vue {
    @Getter('eventInfo')
    eventInfo!: any;


}
</script>