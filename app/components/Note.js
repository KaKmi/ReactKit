/**
 * Created by zhaopenghodoman on 15/7/1.
 */
var React = require('react');
import { DragSource, DropTarget } from 'react-dnd';
const noteSource = {
    beginDrag(props) {
        console.log('begin dragging note', props);

        return {};
    }
};
const noteTarget = {
    hover(props, monitor) {
        console.log('dragging note', props, monitor);
    }
};
import ItemTypes from './ItemTypes';

@DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export default class Note extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            edited:false
        };
    }
    render(){
        const {value,onEdit,...props}= this.props;
        var edited = this.state.edited;

        return (<div {...props}>{
            edited
            ?<input type='text' defaultValue={value} onBlur={(e)=> this.finishEdit(e)} onKeyPress ={(e)=> this.checkEnter(e)}/> : <div onClick={()=>this.edit()}>{value}</div>
            }</div>
        );
    }
    edit(){
        this.setState({
            edited:true
        })
    }
    checkEnter(e){
        if(e.key==='Enter'){
            this.finishEdit(e);
        }
    }
    finishEdit(e){
        this.props.onEdit(e.target.value);
        this.setState({
            edited:false
        })
    }
}

