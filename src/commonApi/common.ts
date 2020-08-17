//获取表单内单一组件;
function getComsIndex(list: any[],comId: string) {
    let comsObj;
    const comsIndexEach=function(list: any[],comId: string) {
        list.forEach((val,index)=>{
            if (val.comId==comId) {
                comsObj=val;
            } else  {
                if (val.children) {
                    val.children.forEach(val => {
                        if (val.list.length > 0) {
                            comsIndexEach(val.list, comId);
                        }
                    })
                }
            }
        })
    }
    comsIndexEach(list,comId);
    return comsObj;
}


export {getComsIndex}