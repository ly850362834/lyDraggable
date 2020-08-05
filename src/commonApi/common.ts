
function getComsIndex(list: any[],comId: string) {
    let comsObj;
    const comsIndexEach=function(list: any[],comId: string) {
        list.forEach((val,index)=>{
            // console.log(val,2222)
            if (val.option.children) {
                comsIndexEach(val.option.children,comId);
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