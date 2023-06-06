import './App.css';
import React, { createContext, useEffect, useState } from 'react'
import { Map } from './components/Map'
import { Navbar } from './components/Navbar';
import { AddPin } from './components/AddPin';
import { AppContext } from './helpers/AppContext';
import axios from 'axios';


const App = () => {
  const [darkMap, setDarkMap] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [satteliteMap, setSatteliteMap] = useState(false)
  const [pins, setPins] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/api/pins/').then((response) => {
      console.log(response.data);
      setPins(response.data)
    })
  }, [])

  return (<div className="App">
    <AppContext.Provider value={{ showForm, setShowForm, darkMap, setDarkMap, satteliteMap, setSatteliteMap, pins, setPins }}>
      <Navbar darkMap={darkMap} setDarkMap={setDarkMap} satteliteMap={satteliteMap} setSatteliteMap={setSatteliteMap} />
      <Map darkMap={darkMap} satteliteMap={satteliteMap} />
      {showForm && <AddPin />}
    </AppContext.Provider>
  </div>)
}

export default App