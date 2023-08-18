import React from 'react'
import Routes from './src/routes/routes'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
