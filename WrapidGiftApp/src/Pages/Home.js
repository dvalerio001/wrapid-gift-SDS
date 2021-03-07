import React from "react";
import ReactDOM from "react-dom";

// here we tell React to put our main app component <Home /> inside the DOM element with id #myApp
ReactDOM.render(
  <Home />,
  document.querySelector("#home")
);

// or we can use the Navbar component to display at the top of the Home component
function Home(props){
    return (
        <div className="container-fluid"> //notice that in JSX we need to use the attribute name 'className instead of 'class'
          
            <div>
                ... The rest of Home's contents ...
            </div>
        </div>
    );
}
