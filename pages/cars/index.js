import carsData from "../../data/carsData"
import AllButton from "../../module/AllButton"
import Categories from "../../module/Categories"
import SearchBar from "../../module/SearchBar"
import CarsPage from "../../templates/CarsPage"
function AllCars() {
    return (
        <div>
            <SearchBar />
            <Categories />
            <CarsPage data={carsData} />
        </div>
    )
}

export default AllCars