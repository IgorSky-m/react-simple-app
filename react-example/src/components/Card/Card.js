import React from "react";

// name: 'Homenaje a la Neurocirugía',
//     artist: 'Marta Colvin Andrade',
//     description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
//     url: 'https://i.imgur.com/Mx7dA2Y.jpg',
//     alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  

export default function Card({sculpture}) {

    return (
        <div className="card-wrapper">
            <img src={sculpture.url} alt={sculpture.alt}/>
            <p>{`name: ${sculpture.name}`}</p>
            <p>{`description: ${sculpture.dedescriptions}`}</p>
        </div>
    )
}