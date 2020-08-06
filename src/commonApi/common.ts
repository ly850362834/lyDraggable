
function getComsIndex(list: any[],comId: string) {
    let comsObj;
    const comsIndexEach=function(list: any[],comId: string) {
        list.forEach((val,index)=>{
            if (val.option.children) {
                // console.log(val.option.children,222);
                // debugger
                if (val.length>0) {
                    val.option.children.forEach(val=>{
                        comsIndexEach(val,comId);
                    })
                }
            } else {
                if (val.comId==comId) {
                    comsObj=val;
                }
            }
        })
    }
    comsIndexEach(list,comId);
    return comsObj;
}


export {getComsIndex}