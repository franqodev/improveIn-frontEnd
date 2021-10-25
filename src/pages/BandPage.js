import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import bandsActions from "../redux/actions/bandsActions"

const BandPage = ({ history }) => {
   const dispatch = useDispatch()

   const { country, genreCode, members, name, year, id } =
      history.location.state

   useEffect(() => {
      dispatch(bandsActions.getAlbums(id))
   }, [])
   const albums = useSelector((state) => state.bands.albums.albums)
   return (
      <>
         <Header history={history} />
         <div className="container">
            <div className="containerBand">
               <h2 className="bandName">{name}</h2>
               <hr className="divider"></hr>
               <h4 className="pb">{country}</h4>
               <h4 className="pb">{genreCode}</h4>
               <p className="pb">{year}</p>
               <hr className="divider"></hr>
               <div className="flex">
                  <div>
                     <h4 className="pb">Members:</h4>
                     <ul>
                        {!members.length ? (
                           <p>No members</p>
                        ) : (
                           members.map((member, index) => {
                              return (
                                 <li className="li" key={index}>
                                    {member.name}
                                 </li>
                              )
                           })
                        )}
                     </ul>
                  </div>
                  <div>
                     <h4 className="pb">Albums:</h4>
                     <ul>
                        {!albums.length ? (
                           <p>No albums</p>
                        ) : (
                           albums?.map((album, index) => {
                              return (
                                 <li className="li" key={index}>
                                    {album.name} {"( "}
                                    {album.year}
                                    {" )"}
                                 </li>
                              )
                           })
                        )}
                     </ul>
                  </div>
               </div>
            </div>
            <button
               className="back"
               type="button"
               onClick={() => history.push("/bands")}
            >
               BACK TO BANDS
            </button>
         </div>
         <Footer />
      </>
   )
}

export default BandPage
