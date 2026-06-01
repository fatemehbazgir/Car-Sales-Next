import carsData from "../../data/carsData"
import CarsPage from "../../templates/CarsPage"
function AllCars() {
    return (
        <div>
            <CarsPage data={carsData} />
        </div>
    )
}

export default AllCars