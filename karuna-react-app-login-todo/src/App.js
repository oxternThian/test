import React from 'react'
import './css/App.css';
import Header from "./components/header.js"
import MainContent from "./components/mainContent.js"
import Footer from "./components/footer.js"


function App() {
  const [curUserID, setCurUserID] = React.useState('')


  return (
    <div className="App">
      <Header curUserID={curUserID} setCurUserID={setCurUserID} />
      <MainContent curUserID={curUserID} setCurUserID={setCurUserID} />
      <Footer />
    </div>
  );
}

export default App;
