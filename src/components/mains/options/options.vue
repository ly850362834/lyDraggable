<template>
  <div>
    <div class="options_Room">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">名称:</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="comInformation.value">
        <template slot="prepend">值:</template>
      </el-input>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class Render extends Vue {
  @Prop(Array) list!: any[];
  @Prop(Object) comInformation!: {};
  input1='123';
  start22(event: any) {
    // console.log(event)
    // this.falgs = "222222";
    // console.log(this.list,)
  }
  end22(ev: any) {
    // this.falgs = "article";
    console.log(this.list,666666)
  }
}
</script>
<style lang='less'>
.options_Room{
  border: 5px red solid;
  padding: 10px;
}
</style>