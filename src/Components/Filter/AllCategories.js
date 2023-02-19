import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
           
            {['ALL','ANELLI', 'ORECCHINI', 'COLLANE'].map
            (category => <Filter category= {category} key={category.index}  />
            )}
           
        </div>
    )
}
export default AllCategories;