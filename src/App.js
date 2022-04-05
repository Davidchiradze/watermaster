import logo from './logo.svg';
import React from 'react';
import Header from './Components/Header';
import './App.css';
import Howitworks from './Components/Howitworks';
import Video from './Components/Video';
import Footer from './Components/Footer';
import { MessengerChat } from 'react-messenger-chat-plugin';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Howitworks/>
      <Video/>
      <Footer/>
      <MessengerChat
    pageId='104294662250201'
    />
    </React.Fragment>

  );
}

export default App;
