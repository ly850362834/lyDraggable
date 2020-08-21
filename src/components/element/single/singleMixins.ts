import { Vue, Component,Prop } from 'vue-property-decorator';
// declare module 'vue/types/vue' {
//     interface Vue {
//         value: string;
//     }
// }



@Component
export default class SingleMixins extends Vue {
    @Prop(Object) coms: any;
}