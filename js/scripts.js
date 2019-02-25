
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