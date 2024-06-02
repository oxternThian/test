import React from 'react'
import './css/App.css';

//import Header from "./components/header.js"
import MainContent from "./components/mainContent.js"
//import Footer from "./components/footer.js"


function App() {
  const [curUserID, setCurUserID] = React.useState('')



  //<Header curUserID={curUserID} setCurUserID={setCurUserID} />
  //<Footer />
  return (
    <div className="App">
      <MainContent curUserID={curUserID} setCurUserID={setCurUserID} />
    </div>
  );
}

export default App;
