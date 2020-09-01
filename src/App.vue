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
export default class App extends Vue {
  @Prop() private msg!: string;
  created(){
     function test() {
         let result;
         for (let i=0;i<10;i++) {
             result.push(i);
            if (i==5) {
                return result
            }
         }
     }
     console.log(test())
  }
}
</script>

<style>
</style>
