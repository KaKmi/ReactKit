var React = require('react');
var Notes = require('./Notes');
//var alt = require('../libs/alt');
var NoteActions = require('../actions/NoteActions');
var NoteStore = require('../stores/NoteStore');

import {get,set} from '../libs/storage.js';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = NoteActions.init(get('notes'));
        this.stroeChanged = this.stroeChanged.bind(this);
    }
    render(){
        var notes= this.state.notes;
        return (
            <div>
                <button onClick={()=> this.addItem()}>+</button>
                <Notes removeTask={(i)=>this.itemEdited(i)} items={notes} onEdit={(i,task)=>this.itemEdited(i,task)}/>
            </div>
        );
    }
    componentDidMount() {
       NoteStore.listen(this.stroeChanged);
    }
    componentWillMount() {
      NoteStore.unlisten(this.stroeChanged);
    }
    stroeChanged(state){
      this.setState(state);
    }
    itemEdited(id,task){
      if(task){
        NoteActions.update({id,task});
      }else{
        NoteActions.remove(id)
      }
    }
    addItem(){

      NoteActions.create('New task');
    }
}
module.exports = App;
