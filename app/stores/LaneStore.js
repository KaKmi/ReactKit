/**
 * Created by zhaopenghodoman on 15/7/3.
 */
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

      this.lanes=[];
  }
  init(data){
    this.setState(data||{lines:[]});
  }
  create(name){
    const lanes =this.lanes;
    this.setState({
      lanes:lanes.concat({
        name:name
      })
    })
  }
}

export default alt.createStore(LaneStore,'LaneStore');
