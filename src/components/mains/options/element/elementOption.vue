<template>
    <div>
        <ElinputOptions :coms="coms" v-if="coms.type=='input'"></ElinputOptions>
        <ElgirdOptions :coms="coms" v-else-if="coms.type=='gird'"></ElgirdOptions>
        <ElradioOptions :coms="coms" v-else-if="coms.type=='radio'"></ElradioOptions>
    </div>
</template>
<script lang='ts'>
    import { Component, Prop, Vue } from "vue-property-decorator";
    import ElinputOptions from "@/components/element/single/Elinput/ElinputOptions.vue"
    import ElradioOptions from "@/components/element/single/Elradio/ElradioOptions.vue"
    import ElgirdOptions from "@/components/element/layout/Elgird/ElgirdOptions.vue"
    @Component({
        components: {
            ElinputOptions,
            ElgirdOptions,
            ElradioOptions
        }
    })
    export default class ElementOption extends Vue {
        @Prop(Object) coms!: any;
    }
</script>
<style lang='less'>
</style>