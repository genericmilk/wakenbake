<p align="center">
	<img src="wakenbake.png" width="200" />	
</p>
<h1 align="center">
	Wakenbake v2.0.0
</h1>

Wakenbake is a super small script by <a href="https://github.com/genericmilk">genericmilk</a> that allows a visual effect on page load for a "rising card" look.

Simply include the script in your project or into your <a href="https://github.com/genericmilk/cooker">cooker oven</a> to get started!

### Activating Wakenbake

After including Wakenbake into your project, Simply add `data-wakenbake="true"` to any elements you wish to use Wakenbake with. That's all there is to it!

### Customising Wakenbake
Wakenbake can be customised via the 3 parameters at the top of the script. See below for customisation guidelines

The *initialDelay* parameter is the amount of time in ms until the first element starts the animation. This is typically 0 so that when Wakenbake runs `boot();` (On Document load) or `go();` (manual trigger) the animation starts right away.

The *add* parameter is how long in ms between each animation. This typically looks good from `75` to `150` and is used to stagger the animation for multiple elements on the page

The *speed* function is the amount of time in seconds the animation should take. This typically is set to `0.5` but if you'd prefer a quicker animation speed or slower, you can adjust this number accordingly

The *goOnBoot* boolean is whether or not Wakenbake should fire the animation chain after initialisation via use of `wakenbake.go()`. If your content is static this is usually best left as true, but if all of your content is loaded via inline loading, Set this to `false` so you can handle the chain yourself.

### Wakenbake and inline loading
If you are loading content through an AJAX request and dynamically showing it within a DOM element, because typically Wakenbake runs on document ready the effect will not run.

However in the callback to your AJAX request simply run the following function call;
```
wakenbake.go();
```
This will manually trigger the effect for any non-processed elements that haven't already run on the animation chain!
