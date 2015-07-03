/**
 * Created by zhaopenghodoman on 15/7/2.
 */

var React = require('react');
const persist = (Component,storage,storageName,getData)=>{
    return class Persist extends React.Component{
        constructor(props){
            super(props);

            window.addEventListener('beforeunload',()=>{
                if(!storage.get('debug')){
                    storage.set(storageName,getData());
                }
            },false);
        }
        render(){
            return <Component {...this.props} {...this.state}/>
        }
    }
}

module.exports= (storage,storageName,getData)=>{
  return (target)=>persist(target,storage,storageName,getData);
}
