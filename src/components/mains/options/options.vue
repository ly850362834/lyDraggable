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
}
</script>
<style lang='less'>
.options_Room{
  border: 5px red solid;
  padding: 10px;
}
</style>