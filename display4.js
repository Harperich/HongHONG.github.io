(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_3_atlas_", frames: [[0,1802,1920,1080],[0,0,1748,1800],[1750,0,1748,1800]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["无标题_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.粉1 = function() {
	this.spriteSheet = ss["无标题_3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.粉2 = function() {
	this.spriteSheet = ss["无标题_3_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.粉2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,400,300), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.粉1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,400,300), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1920,1080), null);


// stage content:
(lib.无标题3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(-200,855,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-147},0).wait(1).to({x:-94},0).wait(1).to({x:-41},0).wait(1).to({x:12},0).wait(1).to({x:65},0).wait(1).to({x:118},0).wait(1).to({x:171},0).wait(1).to({x:224},0).wait(1).to({x:277},0).wait(1).to({x:330},0).wait(1).to({x:383},0).wait(1).to({x:436},0).wait(1).to({x:488.9},0).wait(1).to({x:541.9},0).wait(1).to({x:594.9},0).wait(1).to({x:647.9},0).wait(1).to({x:700.9},0).wait(1).to({x:753.9},0).wait(1).to({x:806.9},0).wait(1).to({x:859.9},0).wait(1).to({x:912.9},0).wait(1).to({x:965.9},0).wait(1).to({x:1018.9},0).wait(1).to({x:1071.9},0).wait(1).to({x:1124.9},0).wait(25));

	// 图层_2
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,855,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-173.8},0).wait(1).to({x:-147.6},0).wait(1).to({x:-121.5},0).wait(1).to({x:-95.3},0).wait(1).to({x:-69.2},0).wait(1).to({x:-43},0).wait(1).to({x:-16.9},0).wait(1).to({x:9.3},0).wait(1).to({x:35.5},0).wait(1).to({x:61.6},0).wait(1).to({x:87.8},0).wait(1).to({x:113.9},0).wait(1).to({x:140.1},0).wait(1).to({x:166.3},0).wait(1).to({x:192.4},0).wait(1).to({x:218.5},0).wait(1).to({x:244.7},0).wait(1).to({x:270.9},0).wait(1).to({x:297},0).wait(1).to({x:323.2},0).wait(1).to({x:349.3},0).wait(1).to({x:375.5},0).wait(1).to({x:387.2},0).wait(1).to({x:398.9},0).wait(1).to({x:410.6},0).wait(1).to({x:422.3},0).wait(1).to({x:434},0).wait(1).to({x:445.7},0).wait(1).to({x:457.4},0).wait(1).to({x:469.1},0).wait(1).to({x:480.8},0).wait(1).to({x:492.5},0).wait(1).to({x:504.2},0).wait(1).to({x:515.9},0).wait(1).to({x:527.6},0).wait(1).to({x:539.3},0).wait(1).to({x:551},0).wait(1).to({x:562.7},0).wait(1).to({x:574.4},0).wait(1).to({x:586.1},0).wait(1).to({x:597.8},0).wait(1).to({x:609.5},0).wait(1).to({x:621.2},0).wait(1).to({x:632.9},0).wait(1).to({x:644.6},0).wait(1).to({x:656.3},0).wait(1).to({x:668},0).wait(1).to({x:679.7},0).wait(1).to({x:691.4},0).wait(1));

	// 图层_1
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,540,2320,1080);
// library properties:
lib.properties = {
	id: 'F4F1FFBE3A08BA42BF00F8801DBE4E82',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/无标题_3_atlas_.png", id:"无标题_3_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F4F1FFBE3A08BA42BF00F8801DBE4E82'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;