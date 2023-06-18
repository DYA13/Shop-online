
import Oggetto from "./Oggetto";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/oggettiSlice";
import dataContent from "../../data/dataContent";




const Oggetti = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className="b">
            {dataContent
            .filter(oggetto => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === oggetto.category;
            })
            .map(oggetto => <Oggetto  oggetto = {oggetto} key={oggetto.id}  />)}
        
        
        </div>)
}
export default Oggetti;