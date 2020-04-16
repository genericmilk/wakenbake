var Wakenbake = {
    Wait: 0,
    Add: 75,
    Speed: 0.5,
    Boot:function(){
        $('head').append('<style>*[data-fade=true]{-moz-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;-webkit-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;-o-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;</style>');
        $('head').append('<style>*[data-fade=true]:not(.faded){margin-top: 50px!important;opacity: 0;}</style>');
        $('head').append('<style>*[data-fade=true]:not(.init){-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;}</style>');
    },
    Go:function(callback){
        var _loc_wait = Wakenbake.Wait;
        var _loc_add = Wakenbake.Add;   
        setTimeout(function(){
            $( "*[data-fade=true]:not(.faded)" ).each(function() {
                var This = $(this);
                setTimeout(function(){
                    This.addClass('faded');
                    This.addClass('init');
                    setTimeout(function(){
                        if (typeof callback == "function"){
                            callback(); 
                        }
                    }, Wakenbake.Speed * 1000 / 5);
                }, _loc_wait);
                
                _loc_wait = _loc_wait + _loc_add;
            });
        }, _loc_add);
    }
};
$(function() {
    Wakenbake.Boot();
    Wakenbake.Go();
});
