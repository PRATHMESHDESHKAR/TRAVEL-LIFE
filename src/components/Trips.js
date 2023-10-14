import "./Trips.css";
import Tripsdata from "./Tripsdata";
import Trip1 from "../images/image5.jpg";
import Trip2 from "../images/image6.jpg";
import Trip3 from "../images/image7.jpg";

function Trips(){
    return (
    <div className="Trips">
        <h1>Recent Trips</h1>
        <p>You can checkout unique destinations in our Website</p>
    
    <div className="Tripcard">
        <Tripsdata 
        image={Trip1}
        heading ="Los Angeles, California"
        text ="The majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley."
        />
         <Tripsdata 
        image={Trip2}
        heading ="Zürich, switzerland"
        text ="Switzerland is famous for its mountains, clocks and its food – especially cheese and chocolates.The British Royals love to snowboard in Klosters while skiing in Zermatt gives you fantastic views of the iconic Matterhorn mountain. "
        />
         <Tripsdata 
        image={Trip3}
        heading ="Amsterdam ,Netherland"
        text ="Amsterdam has a unique and laid-back culture and is visited by tourists from across the globe. The city is known for being liberal and is alive with an eclectic mix of people. This small capital city boasts more canals than Venice."
        />
        </div>
    </div>
    );
}
export default Trips;