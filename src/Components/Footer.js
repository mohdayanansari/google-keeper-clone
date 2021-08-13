import React from 'react';


function Footer(){

let date = new Date();
let Year = date.getFullYear();



    return (
        <footer>Created by Ayan Ansari with ❤️ | Copyright {Year}</footer>
    )
}

export default Footer;