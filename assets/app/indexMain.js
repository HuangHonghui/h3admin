/**
 * Created by Administrator on 14-10-27.
 */
require(['jquery','bootstrap','iCheck','app/custom','prism'], function ($,bootstrap,iCheck,custom) {
    $(document).ready(function(){
        console.log(custom);
        Prism.highlightAll();
        $('input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '20%' // optional
        });
        custom.init();
    });
});