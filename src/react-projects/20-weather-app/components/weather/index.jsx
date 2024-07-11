
import { useState } from 'react';
import Search from '../search';


const Weather = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (param) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4191c75129d6807f8b5c86a6ddc81f30`)
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const submitSearch = () => {
        fetchWeatherData(search);
    }

    return (
        <div>
            <Search 
                search={search}
                setSearch={setSearch}
                submitSearch={submitSearch}
            />
        </div>
    );
};

export default Weather;