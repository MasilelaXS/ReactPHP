import './App.css'
import Welcome from './components/Welcome'
import SideNav from './components/SideNav'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  // const token = 'UW1RYY6JAYXYWOVW8N9BGNQ1PGOGMZ8R'

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('GET', 'POST', 'OPTIONS');

  const getLearners = () => {
    axios({
          method: 'get',
          url: 'http://localhost/php/api.php',
          // url: 'https://psycho-tech.co.za/stpauls/api.php',
          headers: headers
    }). then (res => { console.log(res.data)})

  }

  useEffect(() => {
    getLearners();
  }, []);


  let [sideNav, setSideNav] = useState (false)

  // Set Navidation Bar
  const openNav = () => {
    setSideNav(() => sideNav = true)
  }
 
  const closeNav = () => {
    setSideNav(() => sideNav = false)
  }

  return (
    <div className="App">
      <p>Hello</p>
      {/* <SideNav navStatus={sideNav} closeNav={closeNav} /> */}
      {/* <Welcome openNav={openNav}  /> */}
    </div>
  );
}

export default App;
