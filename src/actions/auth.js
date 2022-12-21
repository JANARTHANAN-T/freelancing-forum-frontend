import * as api from '../api'
import { setAlert } from './alert'
export const login  = (authData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.login(authData)
        dispatch({type:"AUTH",payload:data})
        navigate("/")
        dispatch(setAlert("Login Successfull","success"))
    } catch (error) {
        console.log(error)
      dispatch(setAlert(error.response.data,'danger'))
    }
}

export const signup = (authData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.signup(authData)
        dispatch({type:"AUTH",payload:data})
        dispatch(setAlert("User Create successfully","success"))
        navigate("/profile/create")
    } catch (error) {
        dispatch(setAlert(error.response.data,'danger'))
    }
}

export const updateProfile = (profileData,navigate) => async(dispatch)=>{
    try {
        const {data} = await api.createProfile(profileData)
        navigate('/')
        dispatch(setAlert("Profile created Successfully","success"))
    } catch (error) {
        console.log(error)
        dispatch(setAlert(error.response.data,'danger'))
    }
}