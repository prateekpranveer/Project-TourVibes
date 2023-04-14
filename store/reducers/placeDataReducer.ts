import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface checkPointState {
    points: String,
}

interface placeDataState {
    name: String,
    adress: String,
    slug: String,
    desc: String,
    category: String,
    checkpoints: checkPointState[]
}

const initialState: placeDataState = {
    name:"",
    adress: "",
    slug: "",
    desc: "",
    category: "",
    checkpoints: []
}

export const placeDataSlice = createSlice({
    name: 'placeData',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<placeDataState>) => {
            // action.payload should be another local state using useState
            const newState = action.payload;
            state = newState;
        },
        removeData: (state, action: PayloadAction<placeDataState>) => {
            state = initialState;
        },
    },
})

export const { setData, removeData } = placeDataSlice.actions
export const selectValue = (state: RootState) => state;
export default placeDataSlice.reducer