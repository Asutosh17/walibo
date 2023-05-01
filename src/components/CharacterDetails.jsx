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
    return (
      <div className='px-[20%] pt-[6%] pb-[10%] w-full h-full mt-7 justify-center'>
        <p className='text-[16px] font-semibold leading-[20px]  mt-5 text-[#002F47] pb-3'>{this.state.characterData.name}</p>
    
        <div className='w-[836px] h-[570px] bg-white rounded-b-md mb-5'>
        <img src={this.state.characterData.image} alt="character" className='w-[836px] h-[524px] rounded-t-md'/>
        <div className='flex justify-between py-2 px-5'>
          <p className='flex items-center gap-2 text-sm'>
            <span className='rounded-full w-5 border border-black p-1 '>
              <img src="/images/heartIcon.svg" alt="" />
            </span>
            <span>25</span>
            <span>
              <img src="/images/watch.svg" alt="" width={20}/>
            </span>
            <span>25</span>
          </p>
          <div className='flex items-center text-sm gap-3 text-[#9C9C9C]'>
            <div className='flex items-center gap-1'>
            <input type="radio" name="article" className='mt-1'/>
            <span>Article</span>
            </div>
            <div className='flex items-center gap-1'>
            <input type="radio" name="article" className='mt-1'/>
            <span>Quiz</span>
            </div>
          </div>
        </div>
        </div>
        <div className='w-[800px]'>
        <p className='font-medium my-1 text-[#002F47]'>{this.state.characterData.gender}</p>
        <p className='my-1 text-[#FD7175] font-semibold text-sm'>{this.state.characterData.status}</p>
        <p className='font-medium mt-8 text-[#002F47] underline uppercase'>{this.state.characterData.species}</p>
        <p  className='font-medium whitespace-pre-wrap mt-2 text-sm text-[#002F47] text-justify'>Our brains are wired to cling to negative experiences more than positive ones. Unfortunately, that can create a vicious cycle in which negative thoughts beget more negative thoughts. Instead, try to focus on the positive parts of your day by keeping a gratitude journal. Carve some time each evening to keep track of at least three things you were grateful for that day. Then write down three or more things you were proud of yourself for.
        If you’re ever feeling blue, you can whip out your journal to see all the people and activities that made you happy, and everything that made you proud. You might be shocked by how much of a mood booster this can be.</p>
        </div>
        <button className='mt-6 w-[300px] rounded-md h-[40px] text-white font-semibold bg-[#FD7175]'>Launch Event</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    singleCharacter: state.locations.singleCharacter // retrieve character details from Redux store
  })


  export default connect(mapStateToProps, {getCharacterById})(CharacterDetails);  