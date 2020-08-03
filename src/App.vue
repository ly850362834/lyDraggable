<template>
  <div id="app">
    <mains></mains>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import mains from "@/components/mains/mains.vue";

@Component({
  components: {
    mains
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style>
</style>
