<template>
    <div>
        <ElinputOptions :coms="coms"></ElinputOptions>
    </div>
</template>
<script lang='ts'>
    import { Component, Prop, Vue } from "vue-property-decorator";
    import ElinputOptions from "@/components/element/single/Elinput/ElinputOptions.vue"
    @Component({
        components: {
            ElinputOptions
        }
    })
    export default class ElementOption extends Vue {
        // @Prop(Array) list!: any[];
        @Prop(Object) coms!: {};
        input1='123';
        // start22(event: any) {
        //     // console.log(event)
        //     // this.falgs = "222222";
        //     // console.log(this.list,)
        // }
        // end22(ev: any) {
        //     // this.falgs = "article";
        //     console.log(this.list,666666)
        // }
    }
</script>
<style lang='less'>
</style>