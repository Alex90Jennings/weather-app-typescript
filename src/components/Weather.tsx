import React, { FC } from 'react'
import { WeatherData } from '../models/WeatherData'

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({data}) => {
    const city: string = localStorage.getItem('city')!

    const monthlyRain = (data: any): number => {
        let monthlyRain = 0
        for(let i=0; i < 31; i++){
            const dailyRain: number = data.locations.london.values[i].precip
            monthlyRain += dailyRain
        }
        return Math.round(monthlyRain)
    }

    const averageTemp = (data: any): number => {
        let averageTemp = 0
        for(let i=0; i < 31; i++){
            const dailyTemp: number = data.locations.london.values[i].maxt
            averageTemp += dailyTemp
        }
        return Math.round(averageTemp / data.locations.london.values.length)
    }

    const dailyIndex = (daysAgo: number): number => {
        let index: number = data.locations.london.values.length - ( daysAgo + 1 )
        return index
    }

    const droughtIndex = (averageTemp: number, monthlyRain: number) => {
        if(monthlyRain > 49 || averageTemp < 1) return 0
        const adjustedTemp: number = (averageTemp < 40 ? averageTemp / 40 : 1)
        const adjustedRain : number = (monthlyRain / 50)
        return adjustedTemp * adjustedRain
    }

    
    console.log(data)

    return (
        <section className='section'>
            <div className='container'>
                <h1 className='title has-text-centered' style={{marginBottom: 50}}>{data.locations.london.address.toUpperCase()}</h1>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>4 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`/icons/${data.locations.london.values[dailyIndex(4)].conditions}.png`} alt="icon" />
                        <p className='mb-2'>Max Temp - {Math.round(data.locations.london.values[dailyIndex(4)].maxt)}°C</p>
                        <p className='mb-2'>Precipitation - {Math.round(data.locations.london.values[dailyIndex(4)].maxt)}mm</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>3 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`/icons/${data.locations.london.values[dailyIndex(3)].conditions}.png`} alt="icon" />
                        <p className='mb-2'>Max Temp - {Math.round(data.locations.london.values[dailyIndex(3)].maxt)}°C</p>
                        <p className='mb-2'>Precipitation - {Math.round(data.locations.london.values[dailyIndex(3)].precip)}mm</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>2 days ago</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`/icons/${data.locations.london.values[dailyIndex(2)].conditions}.png`} alt="icon" />
                        <p className='mb-2'>Max Temp - {Math.round(data.locations.london.values[dailyIndex(2)].maxt)}°C</p>
                        <p className='mb-2'>Precipitation - {Math.round(data.locations.london.values[dailyIndex(2)].precip)}mm</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>Yesterday</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`/icons/${data.locations.london.values[dailyIndex(1)].conditions}.png`} alt="icon" />
                        <p className='mb-2'>Max Temp - {Math.round(data.locations.london.values[dailyIndex(1)].maxt)}°C</p>
                        <p className='mb-2'>Precipitation - {Math.round(data.locations.london.values[dailyIndex(1)].precip)}mm</p>
                    </div>
                </div>
                <div>
                    <p className='heading'>Today</p>
                    <div className='title'>
                        <img style={{maxWidth: 50}} src={`/icons/${data.locations.london.values[dailyIndex(0)].conditions}.png`} alt="icon" />
                        <p className='mb-2'>Max Temp - {Math.round(data.locations.london.values[dailyIndex(0)].maxt)}°C</p>
                        <p className='mb-2'>Precipitation - {Math.round(data.locations.london.values[dailyIndex(0)].precip)}mm</p>
                    </div>
                </div>
            </div>
            <div className='level-item has-text-centered'>
                <div>
                    <p className='heading'>Precipitation in the last 30 days - {monthlyRain(data)}mm</p>
                    <p className='heading'>Average Highest Temp in the last 30 days - {averageTemp(data)}°C</p>
                    <p className='heading'>Drought Index - {droughtIndex(averageTemp(data), monthlyRain(data))}</p>
                </div>
            </div>
        </section>
    )
}

export default Weather