/**
 * Created by Administrator on 14-10-27.
 */
require(['jquery','bootstrap','iCheck','app/custom','metisMenu','prism','modernizr/modernizr'], function ($,bootstrap,iCheck,custom) {
    $(document).ready(function(){
        console.log(custom);
        Prism.highlightAll();
        $('input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '20%' // optional
        });
        $('#menu').metisMenu();
        custom.init();
    });
});
