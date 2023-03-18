import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import './App.css'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import { action,original } from "./Constants/urls";

function App() {
  
  return (
    <div>
       <NavBar/>
       <Banner/>
       <RowPost Url={original} title='Netflix original' />
       <RowPost Url={action} title='Action Movie' isSmall />
    </div>
  );
}

export default App;
