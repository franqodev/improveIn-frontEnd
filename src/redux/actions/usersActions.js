const usersActions = {
   logIn: (email, name) => {
      return async (dispatch) => {
         dispatch({
            type: "LOG_IN",
            payload: {
               email,
               name,
            },
         })
      }
   },
   logOut: () => {
      return (dispatch) => {
         dispatch({ type: "LOG_OUT" })
      }
   },
}

export default usersActions
