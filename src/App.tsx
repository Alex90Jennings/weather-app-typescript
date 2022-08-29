import React,  { FC } from 'react';
import { useSelector} from 'react-redux'
import './App.css';

import { RootState } from './models/store'
import Search from './components/Search';
import Weather from './components/Weather';

const App: FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data)
  const loading = useSelector((state: RootState) => state.weather.loading)
  const error = useSelector((state: RootState) => state.weather.error)

  return (
    <div className='has-text-centered'>
      <Search title='Enter city name and press search button'/>
      {loading ? <h2 className='is-size-3 py-2'>Loading...</h2> : weatherData && <Weather data={weatherData}/>}
      {error && <p>There was an error, please try again</p>}
    </div>
  );
}

export default App;
