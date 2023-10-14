import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trips from "../components/Trips";
import Location from "../components/location";
import Footer from "../components/Footer";

function HOME (){
 return(
    <>
    <Navbar />
      <Hero 
      className ="Hero"
      Himg ="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      title ="Your Mood Your Journey...."
      text ="Choose Your Destination For Vacation."
      btext =" Travel Planning"
      url ="/"
      bclass ="hide"
      />
    <Location />
    <Trips />
    <Footer />
    </>
 )
 }

export default HOME;