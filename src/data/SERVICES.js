import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trips from "../components/Trips";


function SERVICES(){
    return(
        <>
           <Navbar />
      <Hero 
      className ="HAbout"
      Himg ="https://4kwallpapers.com/images/walls/thumbs_2t/10260.jpg"
      title ="SERVICES" 
      bclass ="hide"
      />
      <Trips />
      <Footer />
        </>
    )
    }
    
export default SERVICES;