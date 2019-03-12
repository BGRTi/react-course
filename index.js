'use strict';

function HelloFunctionalComponent() {
  return React.createElement(
    'div',
    {},
    'HelloFuncWorld'
  );
}

class HelloPureComponent extends React.PureComponent {
  render() {
    return React.createElement(
      HelloFunctionalComponent,
      {},
      'HelloWorld'
    );
  }
}

class HelloComponent extends React.Component {
  render() {
    return React.createElement(
      HelloPureComponent,
      {},
      'div'
    );
  }
}

const domContainer = document.querySelector('#hello_world_container');
ReactDOM.render(React.createElement(HelloComponent), domContainer);