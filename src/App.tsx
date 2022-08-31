import React,  { FC } from 'react';
import { useSelector} from 'react-redux'
import './App.css';

import { RootState } from './models/store'
import Search from './components/Search';
import Weather from './components/Weather';
import Alert from './components/Alert';
import { setAlert } from './actions/alertActions';
import { setError } from './actions/weatherActions';
import { useDispatch } from 'react-redux';

const App: FC = () => {
  const dispatch = useDispatch()
  const weatherData = useSelector((state: RootState) => state.weather.data)
  const loading = useSelector((state: RootState) => state.weather.loading)
  const error = useSelector((state: RootState) => state.weather.error)
  const alertMessage = useSelector((state: RootState) => state.alert.message)

  return (
    <div className='has-text-centered'>
      <Search title='Enter city name and press search button'/>
      {loading ? <h2 className='is-size-3 py-2'>Loading...</h2> : weatherData && <Weather data={weatherData}/>}
      {alertMessage && <Alert message={alertMessage} onClose={() => {
        dispatch(setAlert(''))
        console.log(alertMessage)
      }}/>}
      {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
    </div>
  );
}

export default App;
