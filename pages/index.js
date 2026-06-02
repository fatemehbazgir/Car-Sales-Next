import carsData from "../data/carsData"
import Categories from "../module/Categories"
import SearchBar from "../module/SearchBar"
import CarsPage from "../templates/CarsPage"
import AllButton from "../module/AllButton"

function Index() {
  const cars = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
