import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import AllRouters from './Routes/AllRouters'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Sidebar/>
        {/* <Home/> */}
        <AllRouters/>
        <Footer/>
      </div>
    )
  }
}
