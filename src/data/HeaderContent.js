import { gsap } from "gsap";

import { useEffect, useRef } from "react";

const Header = () => {

    let text = useRef(null)

    useEffect(()=>{
        gsap.to(
            text,
            {
                duration: 8,
          
       delay: 3,
       opacity: 1,
       repeat: -1
         
            }
        )
    }
    )
    return(
        <div className="header_container">
           <img className="logoImg" src="Logo.png"  alt="logo" />
          

           <p  ref={el => {text = el}} className="par"> Benvenuto su Jewelry Shop Olivia Rossi!</p>
           <a href="##" className="carello-button"> <img className="carelloImg" src="Carello.png"  alt="logo" /> </a>

        

           
        </div>
    )
}
export default Header;