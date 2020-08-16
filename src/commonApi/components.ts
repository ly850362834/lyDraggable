
import {createdLayoutComponents} from  "./components/layoutComponents/layoutComponents";
import {createdSingleComponents} from  "./components/singleComponents/singleComponents";
function createdComponents(): Record<any, any> {
    // class Common{
    //     public name: string;
    //     public type: string;
    //     public constructor(name: string,type: string) {
    //         this.name=name;
    //         this.type=type;
    //     }
    //
    //
    // }
    // //输入框
    // class Input extends Common {
    //     option={};
    //     value='123';
    //     constructor(name: string,type: string,option?: {}){
    //         super (name,type);
    //         this.option={};
    //         if (option) {
    //             this.option=option
    //         }
    //     }
    // }
    // //栅格布局
    // class Gird extends Common {
    //     option={};
    //     constructor(name: string,type: string,option?: {}){
    //         super (name,type);
    //         this.option={};
    //         if (option) {
    //             this.option=option
    //         }
    //     }
    // }
    // const input = new Input('输入框','input');
    // const gird = new Gird('栅格布局','gird',{children:[{list:[]},{list:[]}]});
    // // const gird = new
    const componentsObject={layout:createdLayoutComponents(),single:createdSingleComponents()};
    // componentsArray.concat()
    // componentsArray.push(input,gird);
    return componentsObject
}



export {createdComponents}