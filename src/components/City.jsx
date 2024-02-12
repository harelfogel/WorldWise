import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";
import styles from "./City.module.css";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {


  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");


  const currentCity = {
    "cityName": "London",
    "country": "Engalnd",
    "emoji": "💂",
    "date": "2027-10-31T15:59:59.138Z",
    "notes": "My favorite city so far!",
    "position": {
      "lat": 38.727881642324164,
      "lng": -9.140900099907554
    },
    "id": 73930385
  };

  // const { id } = useParams();
  // const { getCity, currentCity, isLoading } = useCities();

  // useEffect(
  //   function () {
  //     getCity(id);
  //   },
  //   [id, getCity]
  // );

  const { cityName, emoji, date, notes } = currentCity;

  // if (isLoading) return <Spinner />;

  return (
    <>
      <h1>City {id}</h1>
      <p>Positons: {lat} , {lng}</p>
    </>
  );

  // return (
  //   <div className={styles.city}>
  //     <div className={styles.row}>
  //       <h6>City name</h6>
  //       <h3>
  //         <span>{emoji}</span> {cityName}
  //       </h3>
  //     </div>

  //     <div className={styles.row}>
  //       <h6>You went to {cityName} on</h6>
  //       <p>{formatDate(date || null)}</p>
  //     </div>

  //     {notes && (
  //       <div className={styles.row}>
  //         <h6>Your notes</h6>
  //         <p>{notes}</p>
  //       </div>
  //     )}

  //     <div className={styles.row}>
  //       <h6>Learn more</h6>
  //       <a
  //         href={`https://en.wikipedia.org/wiki/${cityName}`}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Check out {cityName} on Wikipedia &rarr;
  //       </a>
  //     </div>

  //     <div>
  //       <BackButton />
  //     </div>
  //   </div>
  // );
}

export default City;
