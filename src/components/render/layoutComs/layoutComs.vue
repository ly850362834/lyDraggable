<template>
  <div>
      <Elgird v-if="coms.type=='gird'" :coms='coms'></Elgird>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Elgird from "@/components/element/layout/Elgird/Elgird.vue";
@Component({
  components: {
      Elgird,
  }
})
export default class Render extends Vue {
  @Prop(Object) coms: any;
}
</script>

<style>
</style>