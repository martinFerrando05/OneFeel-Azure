import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// class SampleWidget extends ReactHTMLElement { connectedCallback() {
// const interactionId = this.getAttribute('interactionid'); ReactDOM.render(
// <React.StrictMode> 
// <App interactionId={interactionId} />
//   </React.StrictMode>,
//   this
//   // document.getElementById('root')
// )
// }
// }
// customElements.define("sample-widget-dev", SampleWidget);
