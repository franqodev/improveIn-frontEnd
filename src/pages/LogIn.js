import { useState } from "react"
import { useDispatch } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import usersActions from "../redux/actions/usersActions"

const LogIn = ({ history }) => {
   const [userLogIn, setUserLogin] = useState({ email: "", name: "" })
   const dispatch = useDispatch()
   const inputHandler = (e) => {
      setUserLogin({
         ...userLogIn,
         [e.target.name]: e.target.value,
      })
   }

   const submitForm = () => {
      if (userLogIn.email === "" || userLogIn.name === "") {
         alert("All the fields are required")
      } else {
         dispatch(usersActions.logIn(userLogIn.email, userLogIn.name))
         history.push("/bands")
      }
   }

   return (
      <>
         <Header />
         <div className="container">
            <input
               type="email"
               className="input"
               name="email"
               value={userLogIn.email}
               placeholder="Email"
               onChange={inputHandler}
            ></input>
            <input
               type="text"
               className="input"
               name="name"
               value={userLogIn.name}
               placeholder="Name"
               onChange={inputHandler}
            ></input>
            <button className="button" type="submit" onClick={submitForm}>
               LOG IN
            </button>
         </div>
         <Footer />
      </>
   )
}

export default LogIn
