/**
 * Created by heyong on 17/3/15.
 */
import '../common.less';
import Layer from './layer/layer.js';
const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();
    dom.innerHTML = layer.tpl({
        name:'hy',
        arr:['apple','xiaomi','appo','huawei']
    });
};
new App();