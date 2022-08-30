import React, { FC } from 'react'
import { WeatherData } from '../models/WeatherData'

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({data}) => {
    // const city: string = data.address
    console.log("data: ", data)
    // console.log("city: ", data.address)
    const monthlyRain = (data: any): number => {
        let monthlyRain = 0
        for(let i=0; i < 31; i++){
            const dailyRain: number = data.locations.london.values[i].precip
            monthlyRain += dailyRain
        }
        return monthlyRain
    }

    const dailyIndex = (daysAgo: number): number => {
        let index: number = data.values.length - daysAgo
        return index
    }

    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-centered' style={{marginBottom: 50}}>{data.address}</h1>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>4 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.values[dailyIndex(4)].conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.values[dailyIndex(4)].maxt}</p>
                        <p className='mb-2'>Precipitation - {data.values[dailyIndex(4)].maxt}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>3 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.values[dailyIndex(3)].conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.values[dailyIndex(3)].maxt}</p>
                        <p className='mb-2'>Precipitation - {data.values[dailyIndex(3)].precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>2 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.values[dailyIndex(2)].conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.values[dailyIndex(2)].maxt}</p>
                        <p className='mb-2'>Precipitation - {data.values[dailyIndex(2)].precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>Yesterday</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.values[dailyIndex(1)].conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.values[dailyIndex(1)].maxt}</p>
                        <p className='mb-2'>Precipitation - {data.values[dailyIndex(1)].precip}</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>Today</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`../public/icons/${data.values[dailyIndex(0)].conditions}`} alt="icon" />
                        <p className='mb-2'>Max Temp - {data.values[dailyIndex(0)].maxt}</p>
                        <p className='mb-2'>Precipitation - {data.values[dailyIndex(0)].precip}</p>
                    </div>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>Precipitation in the last 30 days - </p>
                    <p className='heading'>Average Temp in the last 30 days - </p>
                    <p className='heading'>Drought Index - {monthlyRain(data)}</p>
                </div>
            </div>
        </section>
    )
}

export default Weather