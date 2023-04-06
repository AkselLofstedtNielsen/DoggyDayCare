

const DogDetails = (props) =>{

    const handleClick = () => {
        props.setPage('catalog');
      };

    return(
        <div className="detailed-container">
            <h2>{props.dog.name}</h2>
            <p className="dogProps">Sex: {props.dog.sex}</p>
            <p className="dogProps">Breed: {props.dog.breed}</p>
            <p className="dogProps">Age: {props.dog.age}</p>
            <p className="dogProps">Chipnumber: {props.dog.chipNumber}</p>
            <button onClick={handleClick}>Back</button>
            <img className="dogImg" src={props.dog.img}></img>

        </div>
    )
}

export default DogDetails;