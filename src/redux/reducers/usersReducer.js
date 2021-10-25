const usersReducer = (state = { email: null, name: null }, action) => {
   switch (action.type) {
      case "LOG_IN":
         localStorage.setItem("email", action.payload.email)
         localStorage.setItem("name", action.payload.name)
         return {
            email: action.payload.email,
            name: action.payload.name,
         }
      case "LOG_OUT":
         localStorage.clear()
         return {
            email: null,
            name: null,
         }
      default:
         return state
   }
}

export default usersReducer
