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
        prism:"./prism/prism"
    },
    shim:{
        bootstrap:['jquery'],
        iCheck:['jquery'],
        prism:{exports:"prism"}
    }
});

