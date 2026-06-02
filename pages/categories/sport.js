import carsData from "../../data/carsData";
import CarsList from "../../templates/CarsList";

function Sport() {
    const sportCars = carsData.filter((car) => car.category === "sport")
    return (
        <CarsList data={sportCars} />
    )
}

export default Sport