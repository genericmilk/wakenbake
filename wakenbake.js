var Wakenbake = {
    Boot:function(){
        var Wait = 0;
        var Add = 150;
        $('head').append('<style>*[data-fade=true]{-moz-transition: margin-top .5s ease-out, opacity .5s ease-out;-webkit-transition: margin-top .5s ease-out, opacity .5s ease-out;-o-transition: margin-top .5s ease-out, opacity .5s ease-out;transition: margin-top .5s ease-out, opacity .5s ease-out;</style>');
        $('head').append('<style>*[data-fade=true]:not(.faded){margin-top: 50px!important;opacity: 0;}</style>');
        $('head').append('<style>*[data-fade=true]:not(.init){-webkit-transition: none !important;-moz-transition: none !important;-ms-transition: none !important;-o-transition: none !important;}</style>');
        setTimeout(function(){
            $( "*[data-fade=true]" ).each(function() {
                var This = $(this);
                setTimeout(function(){
                    This.addClass('faded');
                    This.addClass('init');
                }, Wait);
                Wait = Wait + Add;
            });
        }, Add);
    }
};
Wakenbake.Boot();