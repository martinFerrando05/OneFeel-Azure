import React from 'react';

class Welcome extends React.Component {
render() {
      return (<div className="neo-widget__content">
      <div className="neo-widget__header">
      <div className="neo-widget__header-left">
        <span className="neo-icon-agents"></span>
        <p>React</p>
      </div>
    </div>
      <div className="neo-widget__body">
          <div className="container">
              <h3><b>React Web Component</b></h3>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Welcome;