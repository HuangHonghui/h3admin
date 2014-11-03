/**
 * Created by Administrator on 14-10-24.
 */
requirejs.config({
    baseUrl: 'assets/lib',
    paths: {
        app: '../app',
        jquery:"./jquery/dist/jquery",
        bootstrap:"./bootstrap/dist/js/bootstrap",
        iCheck:'./iCheck/icheck.min',
        metisMenu:'./metisMenu/dist/jquery.metisMenu.min'
    },
    shim:{
        bootstrap:['jquery'],
        iCheck:['jquery'],
        metisMenu:['jquery']
    }
});

