import { Vue, Component,Prop } from 'vue-property-decorator';
@Component
export default class SingleMixins extends Vue {
    @Prop(Object) coms: any;
}