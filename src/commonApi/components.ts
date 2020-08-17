import {createdLayoutComponents} from  "./components/layoutComponents/layoutComponents";
import {createdSingleComponents} from  "./components/singleComponents/singleComponents";
//上一个版本使用的是函数闭包但是这样子增加了内存使用的风险，所以启用了类的创建
export default class CreatedComponents {
    layout: any[];
    single: any[];
    constructor() {
        this.layout=createdLayoutComponents();
        this.single=createdSingleComponents();
    }
}
