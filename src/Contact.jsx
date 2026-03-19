import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFirefoxBrowser } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='contact-page'>

        <p>contact page</p>
        <div className="informations">
          <div className="information-childeren address"><FaLocationDot />Address</div>
          <div className="information-childeren mail-us"><TbMailFilled />Mail Us</div>
          <div className="information-childeren telephone"><BsFillTelephoneFill />+2519-21-55-64-34</div>
          <div className="information-childeren website"><FaFirefoxBrowser />myecommerece.com</div>
        </div>

    </div>
  )
}

export default Contact