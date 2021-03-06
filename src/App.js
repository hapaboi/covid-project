import React, { useState } from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Main from "./components/Main";
import Dropdown from "./components/Dropdown";
import useFetchData from "./hooks/fetchData";

function App() {
  const[selected, setSelected] = useState('Global')
  const[open, setOpen] = useState(false)

  const countriesUrl = 'https://covid-api.mmediagroup.fr/v1/cases'
  const {data, loading, error} = useFetchData(countriesUrl)

  return (
    <div className="App">
      
      <Navbar selected = {selected} open = {open} setOpen={setOpen} 
      loading = {loading} error = {error}/>
      {!loading && <main className="Main">
        {open ?
        <Dropdown data = {data} setSelected = {setSelected} setOpen={setOpen}/> :
        <Main selected = {selected} data = {data}/>
        }
      </main>}
    </div>
  );
}

export default App;
