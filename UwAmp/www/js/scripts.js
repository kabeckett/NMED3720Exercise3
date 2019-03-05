var imgMaterial;
var scene;
var camera;
var renderer;
var light1, light2;
var cubeGeometry;
var icoGeometry;
var color;
var material;
var textureLoader;
var cube;
var icosahedron;
var render;
var rotation;

// window.onload = init;

function initScene() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	camera.position.z = 100;
};

function initLighting() {
	light1 = new THREE.PointLight( 0xFFFFFF );
	light1.position.set( -20, 15, 25 );

	light2 = new THREE.PointLight( 0xFFFFFF );
	light2.position.set( 20, 15, 25);
		
	// add the light to the scene
	scene.add( light1 );
	scene.add( light2 );
};

function initShapes() {
// make geometry
	cubeGeometry = new THREE.BoxGeometry ( 20, 20, 20 );
	icoGeometry = new THREE.IcosahedronGeometry( 20, 0 );

	// create material for the objects
	// var material = new THREE.MeshNormalMaterial();
	color = new THREE.Color( "#9370DB" );
	material = new THREE.MeshLambertMaterial( {color: color.getHex(), wireframe: true} );
	textureLoader = new THREE.TextureLoader();
	textureLoader.crossOrigin = true;
	textureLoader.load('tiles.jpg', function(texture) {
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 2, 2 );
		imgMaterial = new THREE.MeshLambertMaterial( {map: texture} );
	});

	cube = new THREE.Mesh( cubeGeometry, imgMaterial );
	icosahedron = new THREE.Mesh( icoGeometry, material );


	// add the cube to the scene
	scene.add( cube );
	scene.add( icosahedron );

	cube.rotation.x = 0.45;
	cube.rotation.y = -0.25;

	cube.position.x = -30;

	//tweenIcosohedron();

	icosahedron.rotation.x = 0.5;
	icosahedron.rotation.y = 0.1;

	icosahedron.position.x = 25;
};

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
};

function tweenIcosohedron() {
	rotation = {x: Math.random()*3, y: Math.random()*3, z: Math.random()*3};
	TweenLite.to(icosahedron.rotation, 1, {x: icosahedron.rotation.x, y: icosahedron.rotation.y, z: icosahedron.rotation.z, ease: Back.easeInOut, onComplete: tweenIcosohedron});
};


initScene();
initLighting();
initShapes();
render();