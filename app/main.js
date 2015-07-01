require('./stylesheets/main.css') ;
var React = require('react');

console.log(React);
var App = require('./components/App');
main();
function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App/>,app);
}
