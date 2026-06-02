import carsData from "../../data/carsData"
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