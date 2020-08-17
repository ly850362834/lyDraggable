//基本组件构造函数与继承
function createdSingleComponents(): any[]{
    //简单组件基本类
    class SingleComponents{
        public value: any;//组件值
        public comId: string;//组件Id，后面在初次拖入会进行赋值
        public options: Record<any, any>;//组件额外属性，不同组件里面不一样
        readonly  type:  string;//组件类别（只读属性）
        readonly  name:  string;//组件名称（只读属性）
        readonly  comType: string;//组件性质类别（只读属性）
        //受保护的构造函数，不会创造实例
        protected constructor(type: string,name: string,comType: string) {
            this.options={};
            this.comId='';
            this.type = type;
            this.name=name;
            this.comType=comType;
        }
    }
    //input框继承
    class Input extends SingleComponents{
        constructor(type: string,name: string,comType: string) {
            super(type,name,comType)
        }
    }
    const singleComponents: any[]=[];
    const input = new Input('input','输入框','single');
    singleComponents.push(input);
    return singleComponents
}
export {createdSingleComponents}