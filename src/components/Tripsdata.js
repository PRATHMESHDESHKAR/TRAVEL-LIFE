import "./Trips.css";

function Tripsdata(props) {
    return(
        <div className="T-card">
            <div className="Tripimg">
                <img src ={props.image} alt ="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}
export default Tripsdata;