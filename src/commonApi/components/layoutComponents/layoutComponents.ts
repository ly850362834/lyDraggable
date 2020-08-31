function createdLayoutComponents(): any[]{
    //布局容器组件基本类
    class LayoutComponents{
        children: any[];//布局容器组件
        public comId: string;//组件Id，后面在初次拖入会进行赋值
        public options: Record<any, any>;//组件额外属性，不同组件里面不一样
        readonly  type:  string;//组件类别（只读属性）
        readonly  name:  string;//组件名称（只读属性）
        readonly  comType: string;//组件性质类别（只读属性）
        constructor(type: string,name: string,comType: string) {
            this.options={};
            this.comId='';
            this.type = type;
            this.name=name;
            this.comType=comType;
            this.children=[];
        }
    }
    class Gird extends LayoutComponents{
        constructor(type: string,name: string,comType: string){
            super(type,name,comType);
            const children=[{list:[]}];
            this.children=children;
        }
    }
    const componentsArray: any[]=[];
    const gird = new Gird('gird','栅格布局','layout');
    componentsArray.push(gird);
    return componentsArray
}
export {createdLayoutComponents}