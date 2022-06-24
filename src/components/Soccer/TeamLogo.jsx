import React, { useState } from 'react';
import Arsenal from './../../img/Premiere League/Arsenal_Logo.jpg';
import useStyles from "./teamLogoCSS";

export default function TeamLogo({ image, link }) {

    const classes = useStyles();

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
        return images;
    }

    var images = importAll(require.context('./../../img/Premiere League', false, /\.(png|jpeg|svg)$/));

    images = Object.keys(images).map(i => './../../img/Premiere League/' + i);



    return (
        <div style={{display: ''}}>
           <a href={link}><img src={image} width={'60%'} className={classes.hoverIt} id={"div1"}/></a>
        </div>
    )
}