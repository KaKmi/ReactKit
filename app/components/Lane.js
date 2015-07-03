import AltContainer from 'alt/AltContainer';
import React from 'react';
import {getInitialData} from '../libs/storage.js';
import alt from '../libs/alt';
import Notes from './Notes';
//import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import createNoteActions from '../actions/NoteActions.js';

export default class Lane extends React.Component {
    constructor(props) {
        super(props);
        this.actions = createNoteActions(alt);
        const storeName ='NoteStore-'+this.props.i;
        this.store =alt.createStore(NoteStore,storeName,this.actions);
        this.actions.init(getInitialData(storeName));
        this.actions.init();
    }
    render() {
        const {i, name, ...props} = this.props;

        return (
            <div {...props}>
                <div className='lane-header'>
                    <div className='lane-name'>{name}</div>
                    <div className='lane-add-note'>
                        <button onClick={() => this.addNote()}>+</button>
                    </div>
                </div>
                <AltContainer
                    stores={[this.store]}
                    inject={{
            items: () => this.store.getState().notes || [],
          }}
                    >
                    <Notes onEdit={this.noteEdited.bind(this)} />
                </AltContainer>
            </div>
        );
    }
    addNote() {
        this.actions.create('New note');
    }
    noteEdited(id, task) {
        if(task) {
            this.actions.update({id, task});
        }
        else {
            this.actions.remove(id);
        }
    }
}