import React, { Component } from 'react'
import CharacterDetails from '../components/CharacterDetails'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

export default class AllRouters extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/character/:id/:name" render={this.props} element={<CharacterDetails/>}></Route>
        </Routes>
      </div>
    )
  }
}
