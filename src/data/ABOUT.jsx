import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";

function ABOUT (){
    return(
        <>
       <Navbar />
      <Hero 
      className ="HAbout"
      Himg ="https://images.unsplash.com/photo-1520269604827-3a85b49d6c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=433&q=80"
      title ="ABOUT US"
      bclass ="hide"
      />
      <Aboutus />
      <Footer />
        </>
    )
    }
    
    export default ABOUT;