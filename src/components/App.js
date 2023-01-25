import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
    
    render() {
let relatives=["Gauri","Gaurav","Shubham"];
        return(
            <div id="main">
            <ol key="relativeList">
            {relatives.map((relative,index)=>(
        <li key={`relativeListitem$(index+1)`}>{relative}</li>
        ))}
            </ol>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
