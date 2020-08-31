<template>
  <div style="border:1px blue dotted;padding:2px">
    <singleComs :coms="coms" v-if="coms.comType=='single'"></singleComs>
    <layoutComs :coms="coms" v-if="coms.comType=='layout'"></layoutComs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import singleComs from "@/components/render/singleComs/singleComs.vue";
import layoutComs from "@/components/render/layoutComs/layoutComs.vue";
@Component({
  components: {
    singleComs,
    layoutComs
  }
})
export default class Render extends Vue {
    @Prop(Object) coms!: any;
    created(): void{
        // console.log(this.sss.name);
        // this.sss.name='233'
    }
}
</script>

<style>
</style>