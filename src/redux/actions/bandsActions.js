import axios from "axios"

const bandsActions = {
   getBands: () => {
      return async (dispatch) => {
         try {
            const response = await axios.get(
               "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
            )
            dispatch({
               type: "GET_BANDS",
               payload: {
                  bands: response.data,
               },
            })
         } catch (e) {
            return { success: false, response: null, error: e.message }
         }
      }
   },
   getAlbums: (value) => {
      return async (dispatch) => {
         try {
            const response = await axios.get(
               "https://my-json-server.typicode.com/improvein/dev-challenge/albums"
            )
            dispatch({
               type: "GET_ALBUMS",
               payload: {
                  albums: response.data.filter(
                     (albums) => albums.bandId === value
                  ),
               },
            })
         } catch (e) {
            return { success: false, response: null, error: e.message }
         }
      }
   },
}

export default bandsActions
