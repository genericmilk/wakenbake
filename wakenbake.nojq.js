var Wakenbake = {
    Wait: 0,
    Add: 75,
    Speed: 0.5,
    Boot:function(){
        document.getElementsByTagName('head')[0].innerHTML += '<style>*[data-fade=true]{-moz-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;-webkit-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;-o-transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;transition: margin-top ' + Wakenbake.Speed + 's ease-out, opacity ' + Wakenbake.Speed + 's ease-out;</style>';
        document.getElementsByTagName('head')[0].innerHTML += '<style>*[data-fade=true]:not(.faded){margin-top: 50px!important;opacity: 0;}</style>';
        document.getElementsByTagName('head')[0].innerHTML += '<style>*[data-fade=true]:not(.init){-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;}</style>';
    },
    Go:function(){
        var _loc_wait = Wakenbake.Wait;
        var _loc_add = Wakenbake.Add;   
        setTimeout(function(){
            var a = document.querySelectorAll('[data-fade]');
            for (var i=0, max=a.length; i < max; i++) {
                var This = a[i]; // This is current ele
                Wakenbake.Handle(This,_loc_wait);
                _loc_wait = _loc_wait + _loc_add;
            }
        }, _loc_add);
    },
    Handle:function(e,w){
        setTimeout(function(){
            e.className += ' faded';
            e.className += ' init';
        }, w);
    }
};
Wakenbake.Boot();
Wakenbake.Go();