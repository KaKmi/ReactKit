var alt = require('../libs/alt');
var NoteActions = require('../actions/NoteActions');
class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];
  }

  /***
   *  create task
   * @param task
   */
  init(data){
    this.setState(data||{notes:[]});
  }
  create(task) {
    const notes = this.notes;

    this.setState({
      notes: notes.concat({task})
    });
  }

  /***
   * update task
   * @param id
   * @param task
   */
  update({id, task}) {
    const notes = this.notes;

    notes[id].task = task;

    this.setState({notes});
  }

  /***
   * remove task
   * @param id
   */
  remove(id) {
    const notes = this.notes;

    this.setState({
      notes: notes.slice(0, id).concat(notes.slice(id + 1)),
    });
  }

}
module.exports = alt.createStore(NoteStore);
