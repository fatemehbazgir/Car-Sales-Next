import carsData from "../../data/carsData";
import CarsList from "../../templates/CarsList";

function Hatchback() {
    const hatchbackCars = carsData.filter((car) => car.category === "hatchback")
    return (
        <CarsList data={hatchbackCars} />
    )
}

export default Hatchback