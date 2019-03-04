
// set the scene
var scene = new THREE.Scene();

// add a camera
// FOV, aspect, near, far
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// place camera at z 100
camera.position.z = 100;

// add renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// add the renderer element to the DOM
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry (20, 20, 20);
// var material = new THREE.MeshLambertMaterial ({color: 0xfd59d7});

var textureLoader = new THREE.textureLoader();

textureLoader.crossOrigin = true;

textureLoader.load('https://cdn.pixabay.com/photo/2017/08/10/02/05/tiles-shapes-2617112_960_720.jpg');

texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 2, 2 );

var material = new THREE.MeshLambertMaterial( {map: texture} );
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.PointLight(0xFFFF00);

light.position.set(10, 0, 25);
scene.add(light);

cube.rotation.x = 0.45;
cube.rotation.y = -0.25;

cube.position.x = -30;
