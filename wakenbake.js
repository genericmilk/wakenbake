let wakenbake = {
    initialDelay: 0,
    add: 75,
    speed: 0.5,
    goOnBoot: true,
    boot(){
        document.getElementsByTagName('head')[0].innerHTML += '<style>*[data-wakenbake=true]{-moz-transition: margin-top ' + wakenbake.speed + 's ease-out, opacity ' + wakenbake.speed + 's ease-out;-webkit-transition: margin-top ' + wakenbake.speed + 's ease-out, opacity ' + wakenbake.speed + 's ease-out;-o-transition: margin-top ' + wakenbake.speed + 's ease-out, opacity ' + wakenbake.speed + 's ease-out;transition: margin-top ' + wakenbake.speed + 's ease-out, opacity ' + wakenbake.speed + 's ease-out;*[data-wakenbake=true]:not(.faded){margin-top: 50px!important;opacity: 0;}</style>*[data-wakenbake=true]:not(.init){-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;}</style>';
        return this.goOnBoot ? wakenbake.go() : true;
    },
    go(){
        var _loc_wait = wakenbake.initialDelay;
        var _loc_add = wakenbake.add;   
        setTimeout(function(){
            var a = document.querySelectorAll('[data-wakenbake]');
            for (var i=0, max=a.length; i < max; i++) {
                wakenbake.handle(a[i],_loc_wait);
                _loc_wait = _loc_wait + _loc_add;
            }
        }, _loc_add);
    },
    handle(e,w){
        setTimeout(function(){
            e.className += ' faded';
            e.className += ' init';
        }, w);
    }
};
wakenbake.boot();