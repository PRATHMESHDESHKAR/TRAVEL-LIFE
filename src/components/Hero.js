import "./Hero.css";
function Hero (props){
    return(
       <>
       <div className={props.className}>
        <img alt="Himg" src={props.Himg} /> 
       <div className="H-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.bclass}>
           {props.btext}
        </a>
       </div>
       </div>
   
       </>
    )
    }
   
   export default Hero;