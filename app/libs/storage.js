/**
 * Created by zhaopenghodoman on 15/7/2.
 */
module.exports= {
    get:function(k){
        try{
            return JSON.parse(localStorage.getItem(k));
        }
        catch(e){
            return null;

        }
    },
    set: function (k, v) {
        localStorage.setItem(k,JSON.stringify(v));
    }
}