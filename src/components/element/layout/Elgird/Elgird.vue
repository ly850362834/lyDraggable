<template>
  <div>
    <el-row>
      <el-col :span="24/coms.children.length" v-for="(item,index) in coms.children" :key="index" class="colBorder">
        <draggableCom :list="item.list" style="min-height:50px"></draggableCom>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import render from "@/components/render/render.vue";
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {
     render 
  }
})
export default class Render extends Vue {
  list=[]
  @Prop(Object) coms: any;
  start22(event: any) {
    // console.log(event)
    // // this.falgs = "222222";
    // console.log(this.list)
  }
  end22(ev: any) {
    // this.falgs = "article";
    // console.log(this.list)
  }
}
</script>

<style lang='less'>
</style>