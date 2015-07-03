/**
 * Created by zhaopenghodoman on 15/7/2.
 */
var React = require('react');

const connect =(Component,store)=>{
  return class Connect extends React.Component {
    constructor(props) {
      super(props);
      this.storeChanged = this.storeChanged.bind(this);
      this.state = store.getState();
    }
    componentDidMount() {
      store.listen(this.storeChanged);
    }
    componentWillUnmount() {
        store.unlisten(this.storeChanged);
    }
    storeChanged(){
      this.setState(store.getState());
    }
    render() {

        return <Component {...this.props} {...this.state} />;
    }

  }
}
module.exports = (store)=>{
  return (target)=>connect(target,store);
};
