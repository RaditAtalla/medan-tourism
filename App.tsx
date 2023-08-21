import React from 'react'
import Routes from './src/routes/routes'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import LocationPermission from './src/services/LocationPermission'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <LocationPermission />
    </Provider>
  )
}

export default App
