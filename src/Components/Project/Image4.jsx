import React, { useState } from 'react';

let k = 1;
let id;
const Image4 = (props) => {
    const { imgs } = props;
    if (id) clearInterval(id);
    id = setInterval(() => {
        if (k == 6) k = 0;
        let img = document.getElementById("img4");
        img.src = imgs[k];
        k++;
    }, 2000);
    return (
        <img src={imgs[0]} id="img4" alt="Project img" />
    )
}

export default Image4
