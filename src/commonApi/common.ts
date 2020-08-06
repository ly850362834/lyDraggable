
function getComsIndex(list: any[],comId: string) {
    let comsObj;
    const comsIndexEach=function(list: any[],comId: string) {
        list.forEach((val,index)=>{
            if (val.comId==comId) {
                comsObj=val;
            } else  {
                if (val.option.children) {
                    val.option.children.forEach(val => {
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