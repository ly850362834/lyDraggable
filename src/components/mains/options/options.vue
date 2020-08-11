<template>
  <div>
    <div class="options_Room">
      <ElementOption :coms="coms"></ElementOption>
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
export default class Render extends Vue {
  @Prop(Array) list!: any[];
  @Prop(Object) coms!: {};
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