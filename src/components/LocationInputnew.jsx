import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocationData } from '../Redux/actions'


export default function LocationInputnew() {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getLocationData())
    },[])

    const {locations} = useSelector(state => state.locations)

    console.log("location data", locations);

    return (
    <div className='flex flex-col items-center gap-3'>
        <p className='font-semibold'>Location</p>
        <div className="flex w-[589px] h-[60px]">
        <input type="text" onChange={(e) => handleChange(e)} value={input}  placeholder='Search By Location'  className="bg-[#9C9C9C1A] rounded-md px-4 py-2 ring-0 outline-0 w-full"/>
        <img src="/images/chevrondown.svg" alt="downarrow" width={20} height={10} className='-ml-10 hover:cursor-pointer'/>
        </div>
      </div>
  )
}
