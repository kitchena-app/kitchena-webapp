import React, { useState } from 'react';
import logo from './logo3.png';

var __html = require('./typeform.html.js');
var template = { __html: __html };

function App() {

  const [typeform, setTypeform] = useState(false);

  if (typeform === true) {
    return (
      <div dangerouslySetInnerHTML={template} ></div>
    )
  }

  return (
    <div className="flex flex-col w-full h-full bg-landing bg-no-repeat bg-cover">

      <header className="h-1/3">
        <img className="w-24 mt-4 ml-4 md:w-24 md:ml-8" src={logo} alt="" />
      </header>

      <div className="flex flex-col h-2/3 mx-4 md:ml-28 md:mt-16 md:w-1/4">
        <h1 className="text-5xl font-semibold mb-2">Connecting Chefs to Kitchen Spots</h1>
        <button className="bg-red-500 rounded-full text-3xl text-white tracking-wide font-semibold p-2 mt-2" onClick={() => setTypeform(true)}>Request Access</button>
      </div>

    </div>
  );
}



export default App;
