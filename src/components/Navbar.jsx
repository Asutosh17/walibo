import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
      <div className='bg-white w-full h-[65px] fixed top-0 flex justify-between items-center'>
            <div className='pl-6 top-4'>
                <img src="/images/logo.png" alt="logo" width={116} height={30}/>
            </div>
            <div className='pr-8 flex items-center gap-4'>
                <img src="/images/notification.svg" alt="notification" width={18} height={18}/>
                <p>Hi, <b>Adam</b></p>
                <img src="/images/profileimg.png" alt="profileimage" width={42} height={42}/>
            </div>
      </div>
    )
  }
}
