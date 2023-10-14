import"./Footer.css";

const Footer = () =>{
    return(
        <div className="Footer">
            <div className="Top">
                <div>
            <h1>TRAVEL LIFE</h1>
            <p>Travel to your favourite Destination</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
            </div>
            </div>
            <div className="Bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Change log</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Projects</a>
                    <a href="/">Twitter</a>
                </div>
              
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contacts</a>
                    
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms & Services </a>
                    <a href="/">Privacy</a>
                    <a href="/">Services</a>
                </div>
            </div>
        </div>
    );
}

export default Footer; 