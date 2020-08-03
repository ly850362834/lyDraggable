<template>
  <div>
      <Elinput v-if="coms.type=='input'"></Elinput>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Elinput from "@/components/element/single/Elinput/Elinput.vue";
@Component({
  components: {
      Elinput
  }
})
export default class Render extends Vue {
  @Prop(Object) coms: any;
}
</script>

<style>
</style>