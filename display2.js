(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_1_atlas_", frames: [[0,1802,1764,1146],[0,0,1748,1800],[1750,0,1748,1800]]}
];


// symbols:



(lib.b37e7642492384b810b3b711e22b2ce = function() {
	this.spriteSheet = ss["无标题_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.蓝1 = function() {
	this.spriteSheet = ss["无标题_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.蓝2 = function() {
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
	this.instance = new lib.蓝2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,400,300), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.蓝1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.229,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,400,300), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.b37e7642492384b810b3b711e22b2ce();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.088,0.942);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1920,1080), null);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(-200,823.3,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-139.5},0).wait(1).to({x:-79},0).wait(1).to({x:-18.5},0).wait(1).to({x:41.9},0).wait(1).to({x:102.4},0).wait(1).to({x:162.9},0).wait(1).to({x:223.3},0).wait(1).to({x:283.8},0).wait(1).to({x:344.2},0).wait(1).to({x:404.7},0).wait(1).to({x:465.2},0).wait(1).to({x:525.6},0).wait(1).to({x:586.1},0).wait(1).to({x:646.6},0).wait(1).to({x:707},0).wait(1).to({x:767.5},0).wait(1).to({x:828},0).wait(1).to({x:888.5},0).wait(1).to({x:948.9},0).wait(1).to({x:1009.4},0).wait(1).to({x:1069.9},0).wait(1).to({x:1130.3},0).wait(1).to({x:1190.8},0).wait(26));

	// 图层_2
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200,823.3,1,1,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-158.2,y:823.1},0).wait(1).to({x:-116.5,y:823},0).wait(1).to({x:-74.8,y:822.8},0).wait(1).to({x:-33,y:822.7},0).wait(1).to({x:8.7,y:822.6},0).wait(1).to({x:50.4,y:822.4},0).wait(1).to({x:92.2,y:822.3},0).wait(1).to({x:133.9,y:822.2},0).wait(1).to({x:175.6,y:822},0).wait(1).to({x:217.3,y:821.9},0).wait(1).to({x:259,y:821.8},0).wait(1).to({x:300.8,y:821.6},0).wait(1).to({x:342.5,y:821.5},0).wait(1).to({x:384.2,y:821.4},0).wait(1).to({x:426,y:821.2},0).wait(1).to({x:467.7,y:821.1},0).wait(1).to({x:509.4,y:821},0).wait(1).to({x:551.1,y:820.8},0).wait(1).to({x:592.9,y:820.7},0).wait(1).to({x:634.6,y:820.6},0).wait(1).to({x:676.3,y:820.4},0).wait(1).to({x:718.1,y:820.3},0).wait(1).to({x:759.8,y:820.2},0).wait(26));

	// 图层_1
	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(560,540,2320,1080);
// library properties:
lib.properties = {
	id: '4CF069E42D6697419867AE21CA255445',
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
an.compositions['4CF069E42D6697419867AE21CA255445'] = {
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