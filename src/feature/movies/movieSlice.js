import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies',async()=>{
    const movieText="Harry"
        const response=await axios.get(`https://www.omdbapi.com?apiKey=a17f20c&s=${movieText}&type=movie`)
       console.log(response)
        return response.data
})




export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows',async()=>{
    const seriesText='Friends'
    const response=await axios.get(`https://www.omdbapi.com?apiKey=a17f20c&s=${seriesText}&type=series`,)
    return response.data
})

export const fetchAsyncMovieOrShowDetail=createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async(id)=>{

    const response=await axios.get(`https://www.omdbapi.com?apiKey=a17f20c&i=${id}&Plot=full`)
    return response.data
})








const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice=createSlice({
name:"movies",
initialState,
reducers:{
    removeSelectedMovieOrShow:(state,action)=>{
state.selectedMovieOrShow={}
    }
}

,
extraReducers:{
    [fetchAsyncMovies.pending]:()=>{

    },
    [fetchAsyncMovies.fulfilled]:(state,action)=>{
        return {...state,movies:action.payload}
    },
    [fetchAsyncMovies.rejected]:(state,action)=>{
       console.log("rejected")
    },
    [fetchAsyncShows.fulfilled]:(state,action)=>{
        return {...state,shows:action.payload}
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]:(state,action)=>{
        return {...state,selectedMovieOrShow:action.payload}
    },
}


})




export const getAllMovies=(state)=>{return state.movies.movies}
export const getAllShows=(state)=>{return state.movies.shows}
export const  getSelectedMovieOrShow=(state)=>{return state.movies.selectedMovieOrShow}
export const {removeSelectedMovieOrShow}=movieSlice.actions

export default movieSlice.reducer