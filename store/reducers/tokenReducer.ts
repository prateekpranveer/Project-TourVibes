import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface tokenState {
    token: String,
    emailIDFound: any
    isLoading: Boolean,
    error: String,
}

const initialState : tokenState = {
    token: "",
    emailIDFound: {},
    isLoading: false,
    error: ""
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        LOGIN_REQUEST: (state) => {
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        },
        LOGIN_SUCCESS: (state, action: PayloadAction<tokenState>) => {
            return {
                ...state,
                token: action.payload.token,
                emailIDFound: action.payload.emailIDFound,
                isLoading: false,
                error: ""
            }
        },
        LOGIN_ERROR: (state, action:PayloadAction<String>) => {
            return {
                ...state,
                token: "",
                isLoading: false,
                error: action.payload
            }
        },
        LOGOUT: (state) => {
            return {
                ...state, 
                token:"",
                emailIDFound:{},
                isLoading: false,
                error:"",
            }
        }
    },
})

export const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} = tokenSlice.actions
export const tokenState  = (state: RootState) => state.token.token;
export default tokenSlice.reducer