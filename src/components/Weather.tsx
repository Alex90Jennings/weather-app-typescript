import React, { FC } from 'react'
import { WeatherData } from '../models/WeatherData'

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({data}) => {
    console.log("data: ", data)
    console.log("city: ", data.address)
    const monthlyRain = (data: any): number => {
        let monthlyRain = 0
        for(let i=0; i < 31; i++){
            const dailyRain: number = data.locations.values[i].precip
            monthlyRain += dailyRain
        }
        return monthlyRain
    }

    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-centered' style={{marginBottom: 50}}>{data.address}</h1>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>5 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.maxt}</p>
                        <p className='mb-2'>Precipitation - {data.precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>4 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.maxt}</p>
                        <p className='mb-2'>Precipitation - {data.precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>3 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.maxt}</p>
                        <p className='mb-2'>Precipitation - {data.precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>2 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.maxt}</p>
                        <p className='mb-2'>Precipitation - {data.precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>Yesterday</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.maxt}</p>
                        <p className='mb-2'>Precipitation - {data.precip}</p>
                    </div>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>Precipitation in the last 30 days - {data.precip}</p>
                    <p className='heading'>Average Temp in the last 30 days - {data.maxt}</p>
                    <p className='heading'>Drought Index - {monthlyRain(data)}</p>
                </div>
            </div>
        </section>
    )
}

export default Weather