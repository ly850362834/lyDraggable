<template>
  <div>
      <el-form-item :label="coms.label" :required="coms.required">
        <el-input v-model="coms.value" placeholder="请输入内容"></el-input>
      </el-form-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SingleMixins from '../singleMixins';
@Component({
    mixins: [SingleMixins]
})
export default class Elinput extends Vue {
    // value=456;
    // @Prop(Object) coms: any;
    created(){
        // console.log(this.coms,999999999999);
    }
}
</script>

<style>
</style>
