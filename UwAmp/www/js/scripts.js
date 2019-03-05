
// DECLARE VARIABLES
var scene;
var camera;
var renderer;
var light1, light2;
var cubeGeometry;
var icoGeometry;
var color;
var material;
var imgMaterial;
var textureLoader;
var cube;
var icosahedron;
var render;

// Initialize the scene, camera, renderer
function initScene() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	camera.position.z = 100;
};

// Initialize the lightings and add them to the scene
function initLighting() {
	light1 = new THREE.PointLight( 0xFFFFFF );
	light1.position.set( -20, 15, 25 );

	light2 = new THREE.PointLight( 0xFFFFFF );
	light2.position.set( 20, 15, 25);
		
	// add the light to the scene
	scene.add( light1 );
	scene.add( light2 );
};

// Initialize the shapes
function initShapes() {
	// make geometry
	cubeGeometry = new THREE.BoxGeometry ( 20, 20, 20 );
	icoGeometry = new THREE.IcosahedronGeometry( 20, 0 );

	// create materials for the objects
	color = new THREE.Color( "#9370DB" ); // color: light purple
	material = new THREE.MeshLambertMaterial( {color: color.getHex(), wireframe: true} );

	// texture loader for image material
	textureLoader = new THREE.TextureLoader();
	textureLoader.crossOrigin = true;
	textureLoader.load('https://upload.wikimedia.org/wikipedia/commons/c/c7/A_black_cat_named_Tilly.jpg', function(texture) {
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 2, 2 );
		imgMaterial = new THREE.MeshLambertMaterial( {map: texture} );
	});

	// create the objects
	cube = new THREE.Mesh( cubeGeometry, imgMaterial );
	icosahedron = new THREE.Mesh( icoGeometry, material );

	// add the objects to the scene
	scene.add( cube );
	scene.add( icosahedron );

	// rotate the cube
	cube.rotation.x = 0.45;
	cube.rotation.y = -0.25;

	// reposition the cube
	cube.position.x = -30;

	//tweenIcosohedron();

	// rotate the icosohedron
	icosahedron.rotation.x = 0.5;
	icosahedron.rotation.y = 0.1;

	// reposition the icosohedron
	icosahedron.position.x = 25;
};

// render the scene
function render() {
	requestAnimationFrame( render );

	icosahedron.rotation.x += 0.01;
	icosahedron.rotation.y += 0.01;

	renderer.render( scene, camera );
};

// animate icosahedron rotation
// function tweenIcosohedron() {
// 	var rotation = {x: Math.random()*3, y: Math.random()*3, z: Math.random()*3};
// 	TweenLite.to(mesh.rotation, 1, {x: rotation.x, y: rotation.y, z: rotation.z, ease: Back.easeInOut, onComplete: tweenIcosohedron});
// };

// call all the functions
initScene();
initLighting();
initShapes();
render();