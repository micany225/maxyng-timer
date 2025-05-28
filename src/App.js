import React from 'react';
import Timer from "/.timer";

function App() {
  return (
    <div className="App">
      <hi>Coutndown Timer</hi>
      <Timer initialTime={10}/>
    
    </div>
  );
}
export default App;