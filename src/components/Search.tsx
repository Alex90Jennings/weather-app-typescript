import React, { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather, setLoading } from '../actions/weatherActions'
import type {} from 'redux-thunk/extend-redux';

interface SearchProps {
    title: string
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(city.trim() === ''){
            return console.log("please enter a city")
        }

        dispatch(setLoading())
        dispatch(getWeather(city))
        setCity('')
    }


    return (
        <div className='hero is-light has-text-centered'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>{title}</h1>
                    <form className='py-5' onSubmit={submitHandler}>
                        <input type="text" className='input has-text-centered mb-2' placeholder='honeydew' style={{maxWidth: 300}} value={city} onChange={changeHandler} />
                        <button className='button is-primary is-fullwidth' style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search