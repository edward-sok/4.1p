import React from 'react';
import './App.css';
import Header from './Header'
import Button from './Button'
import TopBar from './TopBar'
import SignUp from './SignUp'
import Footer from './Footer'
import Tutorialcards from './Tutorialcards'
import Articlecards from './Articlecards';



function App() {
  return (
    <div>
      <br></br>
      <TopBar/>
      <br></br>
      <br></br>
      <Header/>
      <br></br>
      <h1> Featured Articles</h1>
      <br></br>
      <Articlecards/>
      <Button />
      <br></br>
      <br></br>
      <br></br>
      <h1> Featured Tutorials</h1>
      <Tutorialcards/>
      <Button/>
      <br></br>
      <br></br>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
