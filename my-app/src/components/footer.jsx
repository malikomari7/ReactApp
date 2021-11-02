import React from "react";

const currentDate = new Date();
let year = currentDate.getFullYear();


function Footer() {
  return <footer>
  <p>Copyright © {year}</p>
  
  </footer>;
}
 
export default Footer;