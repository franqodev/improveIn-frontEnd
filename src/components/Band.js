const Band = ({ band, history }) => {
   return (
      <div className="cardBand">
         <h2 className="bandName">{band.name}</h2>
         <hr className="divider"></hr>
         <h4 className="pb">{band.country}</h4>
         <h4 className="pb">{band.genreCode}</h4>
         <p className="pb">{band.year}</p>
         <button
            onClick={() =>
               history.push({ pathname: "/band-page", state: band })
            }
            className="moreI"
         >
            More information
         </button>
      </div>
   )
}

export default Band
