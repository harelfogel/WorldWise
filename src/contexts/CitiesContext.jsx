import { createContext, useState, useEffect, useContext } from "react";

const url = 'http://localhost:9000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [currentCity, setCurrentCity] = useState({});


    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${url}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert("There was an error loading data...")
            } finally {
                setIsLoading(false);
            }

        }
        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${url}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert("There was an error loading data...")
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${url}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: { "Content-Type": "application/json" }
                ,
            });
            const data = await res.json();
            setCities(cities => [...cities, data]);
        } catch {
            alert("There was an error loading data...")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity }}>
            {children}
        </CitiesContext.Provider>
    )
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error("CitiesCOntext was used outside the cities provider");
    return context;
}


export { CitiesProvider, useCities };