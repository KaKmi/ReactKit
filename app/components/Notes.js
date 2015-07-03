/**
 * Created by zhaopenghodoman on 15/7/1.
 */

var React = require('react');
var Note = require('./Note');
class Notes extends React.Component{
    constructor(props){
      super(props);
      
    }
    render(){
        var notes = this.props.items;
        return (
            <ul className='notes'>{notes.map((note, i) =>
                    <li className='note' key={'note' + i}>
                            <Note onEdit={this.props.onEdit.bind(this,i)} value={note.task} />
                    </li>
            )}</ul>
        )
    }
}

module.exports= Notes;
