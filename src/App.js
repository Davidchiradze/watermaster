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
    language='en_US'
    themeColor={'#F2F3G2'}
    height={24}
    // loggedInGreeting='Hello logged in user!'
    // loggedOutGreeting='Hello stranger!'
    autoExpand={true}
    debugMode={false}
    onMessengerShow={() => {console.log('onMessengerShow')}}
    onMessengerHide={() => {console.log('onMessengerHide')}}
    onMessengerDialogShow={() => {console.log('onMessengerDialogShow')}}
    onMessengerDialogHide={() => {console.log('onMessengerDialogHide')}}
    />
    </React.Fragment>

  );
}

export default App;
