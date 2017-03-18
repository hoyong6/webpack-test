/**
 * Created by heyong on 17/3/15.
 */
import tpl from  './layer.ejs';
import './layer.less';
function  layer() {
    return{
        name:'layer',
        tpl: tpl,
    }
}

export default layer;