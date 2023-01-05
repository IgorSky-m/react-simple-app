import React from "react";
import Card from "../Card/Card";
import './ContentViewer.css';

import { sculptureList } from "../../data/SculptureData";


export default function ContentViewer(){
    
    const [index, setIndex] = React.useState(0);
    
    return (
        <div className="content-viewer-wrapper">
            <button onClick={() => setIndex(prev => Math.min(prev + 1, sculptureList.length -1))}>Next</button>
            <button onClick={() => setIndex(prev => Math.max(prev - 1, 0))}>Previous</button>
            <button onClick={() => setIndex(0)}>Reset</button>
            <Card sculpture={sculptureList[index]}/>
        </div> 
    )
}