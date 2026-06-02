import carsData from "../../data/carsData"
import Categories from "../../module/Categories"
import CarsPage from "../../templates/CarsPage"
function AllCars() {
    return (
        <div>
            <Categories />
            <CarsPage data={carsData} />
        </div>
    )
}

export default AllCars