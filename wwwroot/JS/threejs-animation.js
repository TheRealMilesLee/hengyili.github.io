// wwwroot/threejs-animation.js

// Dynamically load Three.js library
var script = document.createElement('script');
script.onload = function ()
{
    // Three.js script loaded, initialize your Three.js animation here
    initializeThreeJsAnimation();
};
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
document.head.appendChild(script);

function initializeThreeJsAnimation()
{
    // Initialize Three.js scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Create particles
    var particleCount = 1000;
    var particles = new THREE.Geometry();
    var particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });

    for (var i = 0; i < particleCount; i++)
    {
        var x = Math.random() * 2000 - 1000;
        var y = Math.random() * 2000 - 1000;
        var z = Math.random() * 2000 - 1000;

        var particle = new THREE.Vector3(x, y, z);
        particles.vertices.push(particle);
    }

    var particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Set camera position
    camera.position.z = 100;

    // Animation loop
    function animate()
    {
        requestAnimationFrame(animate);

        particleSystem.rotation.x += 0.005;
        particleSystem.rotation.y += 0.005;

        renderer.render(scene, camera);
    }

    animate();
}
