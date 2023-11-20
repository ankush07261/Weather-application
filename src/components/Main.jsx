import React, { useEffect, useState } from 'react'
import './css/main.css'
import Card from './Card'
// import axios from 'axios'
import Not from './NotFound';
import { setFunction } from './icons';

function Main() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bengaluru");
    const [icon, setIcon] = useState("");

    // console.log(search);
    useEffect(() => {
        async function getData() {
            let api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=29d395129097a089a2a83bc2acf3cdcb`
        //29d395129097a089a2a83bc2acf3cdcb      
        try {
            let res = await fetch(api);
            let response = await res.json();
            console.log(response);
            setCity(response);
            if (response.name) {
                setIcon(response?.weather[0].icon)
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
        }
        getData()
    }, [search]);

    // console.log(city);

    return (
        <div className="main-con">
            <h1 className='heading'>Weather project</h1>
            <input type="search" className="inp" placeholder="Search"
                onChange={(e)=>setSearch(e.target.value) }
            />
            {/* <button className="search" onClick={() => setToggle(!toggle)}>Search</button> */}
            {
                city?.name ? (<Card city={city} search={search} url={setFunction(icon)} />) : <Not/>
            }       
        </div>
    )
}

export default Main
