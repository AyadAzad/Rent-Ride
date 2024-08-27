import Image from "next/image";
import Hero from '../components/Hero'
import {CarCard, CustomFilter, SearchBar} from "@/components";
import {fetchCars} from "@/utils";


export default async function Home() {
    const allCars = await fetchCars();
    const isdataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
     <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h1 className="text-4x1 font-extrabold">
                    Car Catalogue
                </h1>
                <p>
                  Explore Cars you might like
                </p>
            </div>

            <div className="home__filters">
                <SearchBar/>
            </div>
            <div className="home__filters-container">
                <CustomFilter title="fuel"/>
                <CustomFilter title="year"/>
            </div>
            {!isdataEmpty ? (
                <div className="home__cars-wrapper">
                    {allCars?.map((car) => <CarCard car={car}/>)}
                </div>
            ) : (
                <div className="home__error-container">
                    <h2 className="text-black text-xl text-bold">no result ba</h2>
                    <p>{allCars?.message}</p>
                </div>
            )}
        </div>
    </main>
  );
}
