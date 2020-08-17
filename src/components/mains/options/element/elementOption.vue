<template>
    <div>
        <ElinputOptions :coms="coms" v-if="coms.type=='input'"></ElinputOptions>
        <ElgirdOptions :coms="coms" v-if="coms.type=='gird'"></ElgirdOptions>
    </div>
</template>
<script lang='ts'>
    import { Component, Prop, Vue } from "vue-property-decorator";
    import ElinputOptions from "@/components/element/single/Elinput/ElinputOptions.vue"
    import ElgirdOptions from "@/components/element/layout/Elgird/ElgirdOptions.vue"
    @Component({
        components: {
            ElinputOptions,
            ElgirdOptions
        }
    })
    export default class ElementOption extends Vue {
        @Prop(Object) coms!: {};
    }
</script>
<style lang='less'>
</style>