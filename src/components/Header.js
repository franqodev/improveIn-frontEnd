import { useDispatch, useSelector } from "react-redux"
import improveInLogo from "../assets/improvein_logotipo.svg"
import usersActions from "../redux/actions/usersActions"

const Header = ({ history }) => {
   const user = useSelector((state) => state.users)
   const dispatch = useDispatch()
   const logOut = () => {
      dispatch(usersActions.logOut())
      history.push("/")
   }
   return (
      <div className="header">
         <img className="logo" src={improveInLogo}></img>
         {!user.name ? (
            <h1>Challenge FrontEnd React</h1>
         ) : (
            <div className="nameLog">
               <h2 style={{ paddingRight: "4rem" }}>Hi 🖐 {user.name}</h2>
               <button type="button" className="button2" onClick={logOut}>
                  LOG OUT
               </button>
            </div>
         )}
      </div>
   )
}

export default Header
