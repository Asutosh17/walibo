import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCharacterById} from '../Redux/actions'


class CharacterDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
          character_id:null,
          characterData: {}
        }
      }
    
      componentDidMount() {
        // Retrieve the selected character's data from localStorage
        const selectedCharacter = JSON.parse(localStorage.getItem('selectedCharacter'))
        if (selectedCharacter) {
          this.setState({ character_id: selectedCharacter })
          this.props.getCharacterById(selectedCharacter)
        }
      }

      componentDidUpdate(prevProps) {
        if (prevProps.singleCharacter !== this.props.singleCharacter) {
          this.setState({ characterData: this.props.singleCharacter })
        }
      }

  render() {
    console.log("data", this.state.characterData);
    return (
      <div className='px-[20%] pt-[6%] pb-[10%] w-full h-full mt-7 justify-center'>
        <p className='text-[16px] font-semibold leading-[20px]  mt-5 text-[#002F47] pb-3'>{this.state.characterData.name}</p>
    
        <img src={this.state.characterData.image} alt="character" className='w-[836px] h-[524px] rounded-md'/>

        <p className='text-[16px] font-medium leading-[20px]'>Gender :- {this.state.characterData.gender}</p>
        <p className='text-[16px] font-medium leading-[20px]'>Status :- {this.state.characterData.status}</p>
        <p className='text-[16px] font-medium leading-[20px]'>Species :- {this.state.characterData.species}</p>

      </div>
    )
  }
}

const mapStateToProps = state => ({
    singleCharacter: state.locations.singleCharacter // retrieve character details from Redux store
  })


  export default connect(mapStateToProps, {getCharacterById})(CharacterDetails);  