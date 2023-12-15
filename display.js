(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_1_atlas_", frames: [[0,1802,1920,1080],[0,0,1748,1800],[1750,0,1748,1800]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["无标题_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.绿1 = function() {
	this.spriteSheet = ss["无标题_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.绿2 = function() {
	this.spriteSheet = ss["无标题_1_atlas_"];
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
	this.instance = new lib.绿2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,400,300), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.绿1();
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
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(-200,872,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-127.1,y:872.2},0).wait(1).to({x:-54.3,y:872.5},0).wait(1).to({x:18.5,y:872.7},0).wait(1).to({x:91.4,y:872.9},0).wait(1).to({x:164.3,y:873.2},0).wait(1).to({x:237,y:873.4},0).wait(1).to({x:309.8,y:873.6},0).wait(1).to({x:382.8,y:873.9},0).wait(1).to({x:455.5,y:874.1},0).wait(1).to({x:528.4,y:874.3},0).wait(1).to({x:601.3,y:874.5},0).wait(1).to({x:674.1,y:874.8},0).wait(1).to({x:747,y:875},0).wait(1).to({x:819.8,y:875.2},0).wait(1).to({x:892.7,y:875.5},0).wait(1).to({x:965.5,y:875.7},0).wait(1).to({x:1038.4,y:875.9},0).wait(1).to({x:1111.1,y:876.2},0).wait(1).to({x:1184.1,y:876.4},0).wait(29));

	// 图层_2
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,872,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-158.9,y:872.1},0).wait(1).to({x:-117.9,y:872.2},0).wait(1).to({x:-76.8,y:872.3},0).wait(1).to({x:-35.8,y:872.4},0).wait(1).to({x:5.2,y:872.5},0).wait(1).to({x:46.3,y:872.6},0).wait(1).to({x:87.3,y:872.7},0).wait(1).to({x:128.4,y:872.9},0).wait(1).to({x:169.4,y:873},0).wait(1).to({x:210.4,y:873.1},0).wait(1).to({x:251.4,y:873.2},0).wait(1).to({x:292.5,y:873.3},0).wait(1).to({x:333.5,y:873.4},0).wait(1).to({x:374.5,y:873.5},0).wait(1).to({x:415.6,y:873.6},0).wait(1).to({x:456.6,y:873.7},0).wait(1).to({x:497.7,y:873.8},0).wait(1).to({x:538.7,y:873.9},0).wait(1).to({x:579.7,y:874},0).wait(1).to({x:620.8,y:874.1},0).wait(1).to({x:661.8,y:874.2},0).wait(1).to({x:702.9,y:874.3},0).wait(1).to({x:743.9,y:874.5},0).wait(25));

	// 图层_1
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,540,2320,1080);
// library properties:
lib.properties = {
	id: 'B16D45309A48FB439DBE4E7B610E3763',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/无标题_1_atlas_.png", id:"无标题_1_atlas_"}
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
an.compositions['B16D45309A48FB439DBE4E7B610E3763'] = {
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