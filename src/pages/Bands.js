import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Band from "../components/Band"
import Footer from "../components/Footer"
import Header from "../components/Header"
import bandsActions from "../redux/actions/bandsActions"

const Bands = ({ history }) => {
   const dispatch = useDispatch()
   const dataBands = useSelector((state) => state.bands.bands.bands)
   const [bands, setBands] = useState([])
   const [orderBands, setOrderBands] = useState({
      sort: "A-Z",
   })

   useEffect(() => {
      dispatch(bandsActions.getBands())
   }, [])

   useEffect(() => {
      if (dataBands) {
         setBands(
            dataBands.sort((a, b) => {
               if (a.name < b.name) {
                  return -1
               }
               if (a.name > b.name) {
                  return 1
               }
               return 0
            })
         )
      }
   }, [dataBands])

   useEffect(() => {
      let sortBands = [...bands]
      switch (orderBands.sort) {
         case "A-Z":
            sortBands.sort((a, b) => {
               if (a.name < b.name) {
                  return -1
               }
               if (a.name > b.name) {
                  return 1
               }
               return 0
            })
            break
         case "Z-A":
            sortBands.sort((a, b) => {
               if (a.name < b.name) {
                  return 1
               }
               if (a.name > b.name) {
                  return -1
               }
               return 0
            })
            break
         case "YEAR ↓":
            sortBands.sort((a, b) => b.year - a.year)
            break
         case "YEAR ↑":
            sortBands.sort((a, b) => a.year - b.year)
            break
         default:
            return setBands(sortBands)
      }
      setBands(sortBands)
   }, [orderBands])

   const readFilter = (e) => {
      setOrderBands({ ...orderBands, [e.target.name]: e.target.value })
   }

   return (
      <>
         <Header history={history} />
         <div className="container">
            <h1
               style={{
                  paddingTop: "3rem",
                  color: "rgb(51, 134, 230)",
                  fontSize: "2.5rem",
               }}
            >
               BANDS
            </h1>
            <div className="filters">
               <select
                  className="select"
                  value={orderBands.sort}
                  onChange={readFilter}
                  name="sort"
                  id="sort"
               >
                  <option>A-Z</option>
                  <option>Z-A</option>
                  <option>YEAR ↓</option>
                  <option>YEAR ↑</option>
               </select>
            </div>
            <div className="bands">
               {!bands ? (
                  <h1>Loading...</h1>
               ) : (
                  bands.map((band) => (
                     <Band band={band} key={band.id} history={history} />
                  ))
               )}
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Bands
