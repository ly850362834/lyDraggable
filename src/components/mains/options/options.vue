<template>
  <div>
    <div class="options_Room">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组件信息" name="first">
          <ElementOption :coms="coms"></ElementOption>
        </el-tab-pane>
        <el-tab-pane label="表单信息" name="second">配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import ElementOption from "@/components/mains/options/element/elementOption.vue"
@Component({
  components: {
      ElementOption
  }
})
export default class Options extends Vue {
  @Prop(Array) list!: any[];
  @Prop(Object) coms!: {};
  activeName='first';
  created(){
      console.log(this.activeName)
  }
}
</script>
<style lang='less'>
.options_Room{
  border: 5px red solid;
  padding: 10px;
}
</style>