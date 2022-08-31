import React, { FC } from 'react'
import { WeatherData } from '../models/WeatherData'

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({data}) => {
    console.log(data)

    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-centered' style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>
                <div className='level' style={{alignItems: 'flex-start'}}>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>{data.weather[0].description}</p>
                            <p className='title'><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='icon'></img></p>
                        </div>
                    </div>
                    <div className='level-item has-text-centered'>
                        <div>
                            <p className='heading'>temp</p>
                            <div className='title'>
                                <p className='mb-2'>Current: {data.main.temp}</p>
                                <p className='mb-2'>Max: {data.main.temp_max}</p>
                                <p className='mb-2'>Min: {data.main.temp_min}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather