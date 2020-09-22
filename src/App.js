import React from 'react';
import './App.css';
import SideBar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget';
function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widget/>
    </div>
  );
}

export default App;
