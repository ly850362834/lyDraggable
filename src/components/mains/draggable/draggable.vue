<template>
  <draggable
    :list="list"
    :options="{group:'article', disabled: disabled}"
    @start="start22"
    @end="end22"
    @add='onadd'
    @choose='onchoose'
    @change="onchange"
    style="min-height:100%"
  >
    <template v-for="(coms, index) in list">
      <render :key="index" :coms="coms"></render>
    </template>
  </draggable>
</template>
<script lang='ts'>
import render from "@/components/render/render.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import draggable from "vuedraggable";
@Component({
  components: {
    draggable,
    render
  }
})
export default class Render extends Vue {
  @Prop(Array) list!: any[];
  @Prop() private msg!: string;
  disabled = false;
  onchange(index1: any,index2: any){
    console.log(index1,index2,'onchange')
  }
  onchoose(index1: any,index2: any){
    console.log(index1,index2,'choose')
  }
  onadd(index1: any,index2: any){
    console.log(index1,index2,'add')
  }
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
</style>