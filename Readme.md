[![Known Vulnerabilities](https://snyk.io/test/npm/lazier-js/badge.svg)](https://snyk.io/test/npm/lazier-js)
## Lazier.js
A little handy library for lazy loading the images of your Page:

![](Example/record_example.gif)

It's inspired by the ideas that @JMPerez posted [here](https://medium.com/@jmperezperez/how-medium-does-progressive-image-loading-fd1e4dc1ee3d).
In order to work in all major browsers it avoids the CSS filters and uses the HTML5 canvas approach that Medium uses.

It uses a modified and lighter version of Mario Klingemann [SuperFastBlur](http://www.quasimondo.com/BoxBlurForCanvas) algorithm, modified in order to work with canvas objects and not unique id's.

### What does Lazier.js?
In order to speed up the performance of your web page you can lazy load the images of it. That means to load the images when the DOM of your page is already loaded. Lazier.js does this for you!

Oh, and doing it the same way as Medium does it handles it pretty :sparkles: beautifully :sparkles: :wink:

![](Example/stages.png)

### How to use it

Get both `lazier.min.js` and `lazier.min.css`.
You can download it from github or use npm to get the updated version.

```BASH
npm install lazier-js
```

You need to **link the minified css file** at the header of your page:
```HTML
<head>
      <link rel="stylesheet" type="text/css" href="lazier.min.css">
</head>
```
**Modify the structure of your HTML file**:
Lazier.js uses the same HTML structure as [Medium](https://www.medium.com) you need to replace the images that you want to lazy load by the following block:
```HTML
<div class="lazierContainer">
      <img class="lazierLowFy" data-src="Test/test_mini_size.jpg">
      <canvas class="lazierCanvas"></canvas>
      <img class="lazierRender" data-src="Test/test2_mini_size.jpg">
      <noscript class="lazierFall">&lt;img class="lazierNoScript" src="big.jpg"&gt;</noscript>
</div>
```
**LowFi Image:**
```HTML
<img class="lazierLowFy" data-src="mini.jpg">
```
Define as `data-src` the low fidelity image that you want to use. We have tested it with very small images, with a heavy compression: (25px widht, 20% quality).

**HighFi Image:**
```HTML
<img class="lazierRender" data-src="high.jpg">
```
Define as `data-src` the the high fidelity image that you want to load.

**FallBack Image:**
```HTML
<noscript class="lazierFall">&lt;img class="lazierNoScript" src="high.jpg"&gt;</noscript>
```
Define here the fallback image that is going to be loaded if the browser doesn't have JavaScript support. *(WIP)*

**Load the minified JavaScript:**
```HTML
<script src="lazier.min.js"></script>
```
Load the script at your Page and it's done! :star:

**Example**
```HTML
<head>
  <link rel="stylesheet" type="text/css" href="lazier.min.css">
</head>
<div style="width: 240px; height: 360px; display: inline-block;">
    <div class="lazierContainer">
        <img class="lazierLowFy" data-src="Test/test_mini_size.jpg">
        <canvas class="lazierCanvas" id='lc'></canvas>
        <img class="lazierRender" data-src="Test/test_medium_size.jpg">
        <noscript class="lazierFall">&lt;img class="lazierNoScript" src="Test/test_medium_size.jpg"&gt;</noscript>
    </div>
</div>

<div style="width: 240px; height: 360px; display: inline-block;">
    <div class="lazierContainer">
        <img class="lazierLowFy" data-src="Test/test2_mini_size.jpg">
        <canvas class="lazierCanvas" id='lc'></canvas>
        <img class="lazierRender" data-src="Test/test2_medium_size.jpg">
        <noscript class="lazierFall">&lt;img class="lazierNoScript" src="Test/test_medium_size.jpg"&gt;</noscript>
    </div>
</div>

<div style="width: 240px; height: 360px; display: inline-block;">
    <div class="lazierContainer">
        <img class="lazierLowFy" data-src="Test/test3_mini_size.jpg">
        <canvas class="lazierCanvas" id='lc'></canvas>
        <img class="lazierRender" data-src="Test/test3_medium_size.jpg">
        <noscript class="lazierFall">&lt;img class="lazierNoScript" src="Test/test_medium_size.jpg"&gt;</noscript>
    </div>
</div>

<div style="width: 240px; height: 360px; display: inline-block;">
    <div class="lazierContainer">
        <img class="lazierLowFy" data-src="Test/test4_mini_size.jpg">
        <canvas class="lazierCanvas"></canvas>
        <img class="lazierRender" data-src="Test/test4_medium_size.jpg">
        <noscript class="lazierFall">&lt;img class="lazierNoScript" src="Test/test_medium_size.jpg"&gt;</noscript>
    </div>
</div>

<script src="lazier.min.js"></script>
```
