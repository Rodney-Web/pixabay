import GlobalReducer from "./GlobalReducer"
import pixabay from "../api/pixabay"

//reducer
const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_DATA":
            return action.payload
        case "FETCH_TAGS":
            return action.payload
        default:
            return state
    }
}
//actions
const fetchData = dispatch => {
    const results = 100
    const API_KEY = "30376430-55262d848a331ef9b3b55d53b"
    const baseURL = `?key=${API_KEY}&image_type=photo&pretty=true&per_page=${results}`

    //the query/search result will be changed whenever someone searches or they click the tag.
    //either way it will cause the api to re-render
    return (search, activeTab) => {
        const timeOutID = setTimeout(() => {
            pixabay.get(`${baseURL}&q=${search ? search : activeTab}`)
            .then(response => {
              if(search === "") {
                return null
              }
              dispatch({ type: "FETCH_DATA", payload: response.data.hits })
            })
            .catch((err) => {
            console.log(err)
            })
            }, 1500)

        return () => clearTimeout(timeOutID)
    }      
}
//initialValue
const initialState = []
//export reducer || actions || initialstate to Global reducer
export const { Provider, Context } = GlobalReducer(
    reducer,
    { fetchData },
    initialState
)