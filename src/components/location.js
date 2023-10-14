import phuket1 from "../images/image1.jpg";
import phuket2 from "../images/image2.jpg";
import India1 from "../images/image3.jpg";
import India2 from "../images/image4.jpg";
import Locationdata from "./locationdata";
import "./location.css"
const Location =() =>{
    return(
        <div className="Location">
            <h1> Popular Destinations</h1>
            <p>Travel Life gives you opportunity to see a lot within your Budget</p>
        <Locationdata className ="first-loc-reverse"
        heading="Promthep Cape, Phuket"
        text ="One of the many sought after holiday destinations, Phuket is known for its string of palm-fringed beaches, vibrant nightlife, iconic cultural attractions, ancient temples, hidden caves, and postcard-like surroundings. Promthep Cape, with its high cliffs and breath-taking sceneries, attracts crowds in large numbers for its dramatic views of the ocean, especially during sunrise and sunset."
        img1 ={phuket1}
        img2 ={phuket2}
        />

<Locationdata className="first-loc"
        heading="Manali, India"
        text ="Nestled on the banks of River Beas, Manali will take your breath away with its snow-kissed peaks, lush valleys and heart-pumping adventure experiences in the heart of Himalayas.Fondly known as ‘Snow Point’, the valley offers spellbinding views of majestic peaks. It is especially famous for adventure sports."
        img1 ={India1}
        img2 ={India2}
        />
        </div>
    );
}
export default Location;