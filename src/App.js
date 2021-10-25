import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
import LogIn from "./pages/LogIn"
import Bands from "./pages/Bands"
import BandPage from "./pages/BandPage"
import { useSelector } from "react-redux"

const App = () => {
   const user = useSelector((state) => state.users)
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={LogIn} />
            {user.name && <Route path="/bands" component={Bands} />}
            {user.name && <Route path="/band-page" component={BandPage} />}
            <Redirect to="/" />
         </Switch>
      </BrowserRouter>
   )
}

export default App
