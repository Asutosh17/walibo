import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='left-[81px] h-[65px] fixed bottom-0 bg-white w-[94.5%] flex justify-between items-center'>
            <div className='pl-[30px] flex gap-6 text-[#93959B]'>
                <a href="">About</a>
                <a href="">Help Center</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of use</a>
            </div>
            <p className='pr-[23px]'>
               <span className='mr-1 text-[#93959B]'>&#169; 2023</span>
               <span>Training Amigo LLC.  All Rights Reserved</span>
            </p>
      </div>
    )
  }
}
