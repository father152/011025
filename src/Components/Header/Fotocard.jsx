import "./fotocard.css"




const Fotocard = ({ id, name, year, image }) => {
    return (
      <div className="fotocard">
        <p className="id"> {id}</p>
        <p className="name"> {name}</p>
        <p className="year">{year}</p>
        <img className="image" src={image} alt="pic" />
        
      </div>
    );
  };
    export default Fotocard;