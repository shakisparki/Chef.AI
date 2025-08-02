import markerLogo from "../assets/marker.png"

export default function Entry(props) {
    const {  
        Country,
        Destination,
        Img,
        Link,
        StartDate,
        EndDate,
        Text
    } = props.Data;

    return (
        <article className="myentry">            
            <div className="main-image-container">
                <img className="main-image" src={Img?.url} alt={Img?.alt} />
            </div>
            <div> 
                <img src={markerLogo} alt="Marker Logo" className="marker-logo" />
                <span> {Country}</span>

                { Link && <a href={Link} target="_blank" rel="noopener noreferrer">View on Google Maps</a>}
                <h1>{Destination}</h1>

                <h3>{StartDate} - {EndDate}</h3>
                <p>
                    {Text}
                </p>
            </div>
        </article>
    );
}