import firstDisplay from "./array";
import { setStoreValues } from "./storevalues";

const updateArray = (idInt) => {
   let index = firstDisplay.findIndex(e => e.id === idInt)
   firstDisplay[index].bool = false;
   console.log(firstDisplay)
   setStoreValues(firstDisplay)

}

export const validateCheck = (elementCheck) => {
    let idInt = parseInt(elementCheck.id)
    if(elementCheck.classList.contains('checked')){
        elementCheck.nextSibling.classList.toggle('uhuuuuu')
        updateArray(idInt)
    }else{
        let index = firstDisplay.findIndex(e => e.id === idInt)
        firstDisplay[index].bool = true;
        setStoreValues(firstDisplay)
    }
}
export const updateItem = (array) =>{
    array.forEach(element => {
        element.addEventListener('change', ()=>{
            element.classList.toggle('checked');
            validateCheck(element)
        })
    });
}
