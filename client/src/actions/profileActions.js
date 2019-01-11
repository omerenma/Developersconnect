import axios from 'axios';

import {
  GET_PROFILES,
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profiles')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};



// Get  profile By Handle
export const getProfileByHandle = (handle) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle${handle}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};



// Create Profile 
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profiles', profileData)
    .then( res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload:err.response.data
      })
    );
};


// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('api/profiles/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err => 
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      })
      )
}

// Add education
export const addEducation= (eduData, history) => dispatch => {
  axios
    .post('api/profiles/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err => 
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      })
      )
}

// Delete Experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/profiles/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/profiles/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

   
// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profiles/all/')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};


// Delete account & profile
export const deleteAccount = () => dispatch =>{
  if(window.confirm('Are sure?')){
    axios
    .delete('/api/profiles')
    .then(res =>{
      dispatch({
        type:SET_CURRENT_USER,
        payload:{}
      })
    }
    ).catch(err =>{
      dispatch({
        type:GET_ERRORS,
        payload: err.response.data
      })
    })
  }
}


// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};