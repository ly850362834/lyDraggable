import {createdLayoutComponents} from  "./components/layoutComponents/layoutComponents";
import {createdSingleComponents} from  "./components/singleComponents/singleComponents";
function createdComponents(): Record<any, any> {
    const componentsObject={layout:createdLayoutComponents(),single:createdSingleComponents()};
    return componentsObject
}



export {createdComponents}