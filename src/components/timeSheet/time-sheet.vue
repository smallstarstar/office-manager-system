<template>
  <div>
    <div class="scrollbar" id="plane-scroller">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TimeSheet extends Vue {
  private activities: any = [
    {
      content: "支持使用图标",
      timestamp: "2018-04-12 20:46",
      size: "large",
      type: "primary",
      icon: "el-icon-more"
    },
    {
      content: "支持自定义颜色",
      timestamp: "2018-04-03 20:46",
      color: "#0bbd87"
    },
    {
      content: "支持自定义尺寸",
      timestamp: "2018-04-03 20:46",
      size: "large"
    },
    {
      content: "默认样式的节点",
      timestamp: "2018-04-03 20:46"
    },
    {
      content: "支持自定义尺寸",
      timestamp: "2018-04-03 20:46",
      size: "large"
    },
    {
      content: "默认样式的节点",
      timestamp: "2018-04-03 20:46"
    },
    {
      content: "支持自定义尺寸",
      timestamp: "2018-04-03 20:46",
      size: "large"
    },
    {
      content: "默认样式的节点",
      timestamp: "2018-04-03 20:46"
    },
    {
      content: "支持自定义尺寸",
      timestamp: "2018-04-03 20:46",
      size: "large"
    },
    {
      content: "默认样式的节点",
      timestamp: "2018-04-03 20:46"
    },
    {
      content: "支持自定义尺寸",
      timestamp: "2018-04-03 20:46",
      size: "large"
    },
    {
      content: "默认样式的节点",
      timestamp: "2018-04-03 20:46"
    }
  ];
  created() {
    this.scroller();
  }
  scroller() {
    this.$nextTick(() => {
      const planeScroler: any = document.getElementById(
        "plane-scroller"
      ) as HTMLElement;
      planeScroler.scrollTop = planeScroler.scrollHeight;
    });
  }
}
</script>

<style lang="scss" scoped>
.scrollbar {
  margin-top: 2px;
  width: 100%;
  height: 370px;
  overflow-y: auto;
  border: 1px solid #f2784b;
}
</style>