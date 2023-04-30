import React, { Component } from 'react'
import LocationInput from './LocationInput'
import { connect } from 'react-redux'
import { getCharacterById, getLocationData, getLocationResidents} from '../Redux/actions'
import LocationCards from './LocationCards'
import CharacterCards from './CharacterCard'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationsData : [],
      CharacterData : [],
      showAll : false
    }
  }

componentDidMount() {
  this.props.getLocationData()
}


handleClick = async(item) => {
  const { getLocationResidents } = this.props;
 await getLocationResidents(item);
  this.setState({ CharacterData: this.props.characters })
};

handleExplore = () => {
  this.setState({showAll : !this.state.showAll})
}

handleCharacterDetailsClick = async(item) => {
  if(item){
    localStorage.setItem('selectedCharacter', JSON.stringify(item.id))
      window.location.href = `/character/${item.id}/${item.name}`
  }
}

componentDidUpdate(prevProps) {
  if (prevProps.locations !== this.props.locations) {
    const { locations } = this.props;
    if (locations) {
      this.setState({ locationsData: locations.results })
    }
  }
}

render() {

  return (
    <div className='px-[20%] pt-[6%] pb-[10%] w-full h-full'>
    <div className='mb-5'>
    <LocationInput/>
    </div>  
    
    
    <p className='font-semibold flex justify-between'>
     <span>
      Explore Locations
     </span>
     <span onClick={this.handleExplore} className='text-[#FD7175] hover:cursor-pointer pr-20'>
      {this.state.showAll ?  "Hide Explore >" : "Explore All >"}
     </span>
    </p>
    <div className='flex flex-wrap gap-5 hover:cursor-pointer my-5'>
    {
      this.state.locationsData && this.state.locationsData.map((item,index) => <div key={index} onClick={() => this.handleClick(item)}>
         {this.state.showAll ? <LocationCards name={item.name}/> : index < 4 && <LocationCards name={item.name}/>}
      </div>)
    }
    </div>

    <div className='flex flex-wrap gap-5 hover:cursor-pointer'>
      {
      this.state.CharacterData && this.state.CharacterData.map((item, index) => <div key={index} onClick={() => this.handleCharacterDetailsClick(item)}>
        <CharacterCards name={item.name} image={item.image} status={item.status} species={item.species}/>
      </div>)
      }
    </div>

  </div>
  )
}
}

const mapStateToProps = state => ({
locations: state.locations.locations,
characters: state.locations.characters
})

export default connect(mapStateToProps, { getLocationData, getLocationResidents, getCharacterById})(Home);

