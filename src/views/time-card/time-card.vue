<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="12" class="content">
        <TimePlay />
      </el-col>
      <el-col :span="12" class="content">
        <TimeRecord />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TimePlay from "./time-play/time-play.vue";
import TimeRecord from "./time-record/time-record.vue";
@Component({
  components: { TimePlay, TimeRecord }
})
export default class TimeCard extends Vue {}
</script>

<style lang="scss" scoped>
@import "./time-card.scss";
</style>