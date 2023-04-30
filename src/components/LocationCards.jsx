import React, { Component } from 'react'

export default class LocationCards extends Component {
    constructor(props) {
        super(props)
      }

  render() {
    return (
      <div className='border h-20 w-48 flex px-3 items-center rounded-md bg-[#9C9C9C1A]'>
        <div className='bg-white p-2 mr-2 rounded-md'>
        <img src="/images/healthIcon.svg" width={34} height={30} alt="" />
        </div>
        <p className='line-clamp-2 text-[#9C9C9C] text-sm'>
        {this.props.name}
        </p>
        </div>
    )
  }
}
