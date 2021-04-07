import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import Page from './Page.jsx'

function App() {
  return (
    <HashRouter>
      <Page />
    </HashRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));