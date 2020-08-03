function createdComponents(): any[] {
    class Common{
        public name: string;
        public type: string;
        public constructor(name: string,type: string) {
            this.name=name;
            this.type=type;
        }
    }
    //输入框
    class Input extends Common {
        option={};
        constructor(name: string,type: string,option?: {}){
            super (name,type);
            this.option={};
            if (option) {
                this.option=option
            }
        }
    }
    //栅格布局
    class Gird extends Common {
        option={};
        constructor(name: string,type: string,option?: {}){
            super (name,type);
            this.option={};
            if (option) {
                this.option=option
            }
            // this.children={};
        }
    }
    const input = new Input('输入框','input');
    const gird = new Gird('栅格布局','gird',{children:[{list:[]},{list:[]}]});
    // const gird = new 
    const componentsArray: any[]=[];
    componentsArray.push(input,gird);
    return componentsArray
}



export {createdComponents}