import axios from 'axios'

// Action types
export const GET_LOCATIONS = "GET_LOCATIONS"
export const GET_CHARACTERS = "GET_CHARACTERS"
export const GET_SINGLE_CHARACTER = "GET_SINGLE_CHARACTER"

const getLocations = (payload) => ({
        type:GET_LOCATIONS,
        payload
}) 

const getCharacters = (payload) => ({
    type:GET_CHARACTERS,
    payload
})

const getSingleCharacter = (payload) => ({
    type:GET_SINGLE_CHARACTER,
    payload
})



// Get data 
export const getLocationData = () => (dispatch) => {
    axios.get("https://rickandmortyapi.com/api/location").then((res) => {
        dispatch(getLocations(res.data))
    }).catch((err) => console.log(err))
}

export const getLocationFiltered = (name) => (dispatch) => {
    const url = name ? `https://rickandmortyapi.com/api/location/?name=${name}` : 'https://rickandmortyapi.com/api/location';
    axios.get(url)
      .then((res) => {
        dispatch(getLocations(res.data))
      })
      .catch((err) => console.log(err))
  }

export const getLocationResidents = (location) => async (dispatch) => {
    try {
      const residentsData = await Promise.all(
        location.residents.map((residentUrl) => axios.get(residentUrl))
      );
  
      const characters = residentsData.map((resident) => resident.data);

      dispatch(getCharacters(characters));
    } catch (error) {
      console.error(error);
    }
  };

  export const getCharacterById = (id) => (dispatch) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    axios.get(url)
      .then((res) => {
        dispatch(getSingleCharacter(res.data))
      })
      .catch((err) => console.log(err))
  }
