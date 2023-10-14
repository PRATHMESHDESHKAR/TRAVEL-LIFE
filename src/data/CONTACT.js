import Contactform from "../components/Contactform";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function CONTACT(){
    return(
      <>
      <Navbar />
      
      <Hero 
      className ="HAbout"
      Himg ="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
       bclass ="hide"
      />
      <Contactform />
      <Footer />
      </>
    )
    }
    
export default CONTACT;