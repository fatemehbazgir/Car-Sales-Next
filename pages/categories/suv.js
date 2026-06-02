import carsData from "../../data/carsData";
import CarsList from "../../templates/CarsList";

function Suv() {
    const suvCars = carsData.filter((car) => car.category === "suv")
    return (
        <CarsList data={suvCars} />
    )
}

export default Suv