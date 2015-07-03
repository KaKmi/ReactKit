import './stylesheets/main.css';
import './stylesheets/lane.css';
import './stylesheets/note.css';
var React = require('react');

console.log(React);
var App = require('./components/App');
main();
function main() {
  var app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App/>,app);
}
