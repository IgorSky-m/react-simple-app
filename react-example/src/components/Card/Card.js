import React from "react";

export default function Card({sculpture}) {

    return (
        <div className="card-wrapper">
            <img src={sculpture.url} alt={sculpture.alt}/>
            <p>{`name: ${sculpture.name}`}</p>
            <p>{`artist: ${sculpture.artist}`}</p>
            <p>{`description: ${sculpture.dedescriptions}`}</p>
        </div>
    )
}