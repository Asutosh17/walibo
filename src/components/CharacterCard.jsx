import React, { Component } from 'react'

export default class CharacterCards extends Component {
    constructor(props) {
        super(props)
      }

  render() {
    return (
      <div className='shadow-lg rounded-md w-[263px] h-[299px]'>
        <img src={this.props.image} alt="character" className='rounded-t-md w-full h-[80%]'/>
        <div className='flex justify-between px-5 py-2'>
        <div>
          <p className='text-sm font-semibold'>{this.props.name}</p>
          <p className='text-xs font-semibold text-[#9C9C9C]'>{this.props.species}</p>
        </div>
        <p className='text-sm font-semibold'>
        {this.props.status}
        </p>
        </div>
        </div>
    )
  }
}
