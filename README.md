# 🌇 Wakenbake
## By Genericmilk

Wakenbake is a super small script that allows a visual effect on page load for a "rising card" look.

Wakenbake is smaller if you choose to run it in the `wakenbake.js` uncompressed or `wakenbake.min.js` compressed format, But it relies on jQuery to work.

If you do not use jQuery in your development environment, Why not use the new beta `wakenbake.nojq.js` version which does away with the need for the framework!

### To install

Simply include this script in your footer (After jQuery has loaded) (Or better still, using Cooker at https://github.com/genericmilk/cooker 😉 add it to the `/resources/js/libraries` folder)

Then simply include `data-fade="true"` on as many elements as you like!

Then on page load, elements will rise and fade in with a small delay between each staggering the appearance

### Customising Wakenbake
Wakenbake can be customised via the 3 parameters at the top of the script. See below for customisation guidelines

The *Wait* parameter is the amount of time in ms until the first element starts the animation. This is typically 0 so that when Wakenbake runs on `Boot();` (Document load) or `Go();` (manual trigger) the animation starts right away.

The *Add* parameter is how long in ms between each animation. This typically looks good from `75` to `150` and is used to stagger the animation for multiple elements on the page

The *Speed* function is the amount of time in seconds the animation should take. This typically is set to `0.5` but if you'd prefer a quicker animation speed or slower, you can adjust this number accordingly


### Wakenbake and AJAX requests
If you are loading content through an AJAX request and dynamically showing it within a DOM element, because typically Wakenbake runs on document ready the effect will not run.

However in the callback to your AJAX request simply run the following function call;
```
Wakenbake.Go();
```
This will manually trigger the effect for any non-processed elements that haven't already run on the animation chain!
