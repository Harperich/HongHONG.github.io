(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_3_atlas_", frames: [[0,0,1920,1080],[0,1082,400,300],[402,1082,400,300]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["无标题_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["无标题_3_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
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
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,400,300), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

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
	this.instance.setTransform(-200,823,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-142.7,y:823.2},0).wait(1).to({x:-85.4,y:823.4},0).wait(1).to({x:-28.2,y:823.6},0).wait(1).to({x:29.1,y:823.8},0).wait(1).to({x:86.4,y:824},0).wait(1).to({x:143.6,y:824.2},0).wait(1).to({x:200.8,y:824.4},0).wait(1).to({x:258.1,y:824.6},0).wait(1).to({x:315.3,y:824.8},0).wait(1).to({x:372.6,y:825},0).wait(1).to({x:429.9,y:825.2},0).wait(1).to({x:487.1,y:825.4},0).wait(1).to({x:544.4,y:825.6},0).wait(1).to({x:601.6,y:825.8},0).wait(1).to({x:658.9,y:826},0).wait(1).to({x:716.2,y:826.2},0).wait(1).to({x:773.4,y:826.4},0).wait(1).to({x:830.7,y:826.6},0).wait(1).to({x:887.9,y:826.8},0).wait(1).to({x:945.2,y:827},0).wait(1).to({x:1002.5,y:827.2},0).wait(1).to({x:1059.7,y:827.4},0).wait(1).to({x:1117,y:827.6},0).wait(1).to({x:1174.3,y:827.8},0).wait(25));

	// 图层_2
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,818,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-160.2,y:818.2},0).wait(1).to({x:-120.4,y:818.4},0).wait(1).to({x:-80.7,y:818.6},0).wait(1).to({x:-40.9,y:818.9},0).wait(1).to({x:-1.1,y:819.1},0).wait(1).to({x:38.6,y:819.3},0).wait(1).to({x:78.4,y:819.5},0).wait(1).to({x:118.2,y:819.7},0).wait(1).to({x:157.9,y:819.9},0).wait(1).to({x:197.7,y:820.1},0).wait(1).to({x:237.4,y:820.3},0).wait(1).to({x:277.2,y:820.6},0).wait(1).to({x:316.9,y:820.8},0).wait(1).to({x:356.7,y:821},0).wait(1).to({x:396.5,y:821.2},0).wait(1).to({x:436.2,y:821.4},0).wait(1).to({x:476,y:821.6},0).wait(1).to({x:515.8,y:821.8},0).wait(1).to({x:555.5,y:822},0).wait(1).to({x:595.3,y:822.3},0).wait(1).to({x:635.1,y:822.5},0).wait(1).to({x:674.8,y:822.7},0).wait(1).to({x:714.6,y:822.9},0).wait(26));

	// 图层_1
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,540,2320,1080);
// library properties:
lib.properties = {
	id: 'F777F07F1A251548B019221CB7504122',
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
an.compositions['F777F07F1A251548B019221CB7504122'] = {
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