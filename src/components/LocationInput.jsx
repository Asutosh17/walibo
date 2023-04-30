import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocationData, getLocationFiltered } from '../Redux/actions'


class LocationInputnew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    const searchText = e.target.value;
    this.setState({ input: searchText });

    if (searchText.length >= 3) {
      this.props.getLocationFiltered(searchText);
    }
    if(searchText.length === 0){
      this.props.getLocationData()
    }

  }
  
  render() {
console.log("input", this.state.input);
    return (
      <div className='flex flex-col items-center gap-3'>
        <p className='font-semibold'>Location</p>
        <div className='flex w-[589px] h-[60px]'>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.input}
            placeholder='Search By Location'
            className='bg-[#9C9C9C1A] rounded-md px-4 py-2 ring-0 outline-0 w-full'
          />
          <img
            src='/images/chevrondown.svg'
            alt='downarrow'
            width={20}
            height={10}
            className='-ml-10 hover:cursor-pointer'
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {getLocationData, getLocationFiltered})(LocationInputnew)
