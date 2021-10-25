const bandsReducer = (state = { bands: [], albums: [] }, action) => {
   switch (action.type) {
      case "GET_BANDS":
         return {
            ...state,
            bands: action.payload,
         }
      case "GET_ALBUMS":
         return {
            ...state,
            albums: action.payload,
         }
      default:
         return state
   }
}

export default bandsReducer
