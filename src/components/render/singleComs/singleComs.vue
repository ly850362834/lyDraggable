<template>
  <div>
      <Elinput v-if="coms.type=='input'" :coms="coms"></Elinput>
      <Elradio v-if="coms.type=='radio'" :coms="coms"></Elradio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Elinput from "@/components/element/single/Elinput/Elinput.vue";
import Elradio from "@/components/element/single/Elradio/Elradio.vue";
@Component({
  components: {
      Elinput,
      Elradio
  }
})
export default class Render extends Vue {
    @Prop(Object) coms: any;
    created(){
        // console.log(this.coms,111)
    }
}
</script>

<style>
</style>