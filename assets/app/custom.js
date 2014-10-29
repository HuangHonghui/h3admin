/**
 * Created by Administrator on 14-10-24.
 */

define(['jquery','bootstrap'],function($){

        var loadHtmlPage = function(element){
            var $this = $(element),
                url = $this.attr("data-url");
            $(document).load(url,function(html){
                $this.replaceWith(html);
            });
        };

        return {
            init:function(){
                loadHtmlPage("[data-partialPage]")
            }
        };

});
