(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_5_atlas_", frames: [[2455,0,1920,2462],[0,4936,2453,2466],[0,2468,2453,2466],[0,0,2453,2466]]}
];


// symbols:



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["无标题_5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.滚动png复制3 = function() {
	this.spriteSheet = ss["无标题_5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.滚动2png复制2 = function() {
	this.spriteSheet = ss["无标题_5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.滚动3png复制 = function() {
	this.spriteSheet = ss["无标题_5_atlas_"];
	this.gotoAndStop(3);
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


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.滚动3png复制();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.163,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,400,400), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.滚动2png复制2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.163,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,400,400), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.滚动png复制3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.163,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,400,400), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,1920,2462), null);


// stage content:
(lib.products = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件13();
	this.instance.parent = this;
	this.instance.setTransform(680,519,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:509.8,y:510.3},0).wait(1).to({x:341.9,y:481.4},0).wait(1).to({x:179.4,y:430.5},0).wait(1).to({x:25.5,y:357.3},0).wait(1).to({x:-116.8,y:263.5},0).wait(1).to({x:-133.4,y:250.8},0).wait(1).to({x:-150,y:238.1},0).wait(1).to({x:-166.7,y:225.4},0).wait(1).to({x:-183.3,y:212.7},0).wait(1).to({x:-200,y:200},0).wait(35));

	// 图层_5
	this.instance_1 = new lib.元件14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(680,519,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:663.4},0).wait(1).to({x:646.7},0).wait(1).to({x:630.1},0).wait(1).to({x:613.5},0).wait(1).to({x:596.8},0).wait(1).to({x:580.2},0).wait(1).to({x:563.6},0).wait(1).to({x:546.9},0).wait(1).to({x:530.3},0).wait(1).to({x:513.7},0).wait(1).to({x:497},0).wait(1).to({x:480.4},0).wait(1).to({x:463.8},0).wait(1).to({x:447.2},0).wait(1).to({x:300.8,y:496.3},0).wait(1).to({x:158.4,y:454.9},0).wait(1).to({x:24.2,y:392},0).wait(1).to({x:-96.8,y:306.4},0).wait(1).to({x:-200,y:200},0).wait(26));

	// 图层_6
	this.instance_2 = new lib.元件15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(680,519,1,1,0,0,0,200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:669.7},0).wait(1).to({x:659.3},0).wait(1).to({x:649},0).wait(1).to({x:638.7},0).wait(1).to({x:628.3},0).wait(1).to({x:618},0).wait(1).to({x:607.6},0).wait(1).to({x:597.3},0).wait(1).to({x:587},0).wait(1).to({x:576.6},0).wait(1).to({x:566.3},0).wait(1).to({x:556},0).wait(1).to({x:545.6},0).wait(1).to({x:535.3},0).wait(1).to({x:524.9},0).wait(1).to({x:514.6},0).wait(1).to({x:504.3},0).wait(1).to({x:493.9},0).wait(1).to({x:483.6},0).wait(1).to({x:473.3},0).wait(1).to({x:462.9},0).wait(1).to({x:452.6},0).wait(1).to({x:442.3},0).wait(1).to({x:294.1,y:503.2},0).wait(1).to({x:150.1,y:465.1},0).wait(1).to({x:15.5,y:401.2},0).wait(1).to({x:-103.4,y:311.5},0).wait(1).to({x:-202.2,y:200},0).wait(17));

	// 图层_1
	this.instance_3 = new lib.元件11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,1231,1,1,0,0,0,960,1231);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,1250,1920,2462);
// library properties:
lib.properties = {
	id: '50EDCCB934A6B645A33E17599909798F',
	width: 1920,
	height: 2500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/无标题_5_atlas_.png", id:"无标题_5_atlas_"}
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
an.compositions['50EDCCB934A6B645A33E17599909798F'] = {
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