<template>
  <div :data-com="123">
      <el-form-item label="活动名称">
        <el-input v-model="val" placeholder="请输入内容"></el-input>
      </el-form-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export default class Input extends Vue {
  @Prop() private msg!: string;
  val='123456';
}
</script>

<style>
</style>
