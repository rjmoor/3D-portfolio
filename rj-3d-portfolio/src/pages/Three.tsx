import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

console.log('Testing')
// Initialize the scene
const scene = new THREE.Scene()
console.log(scene)
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)

const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
)
scene.add(cubeMesh)
console.log(cubeMesh)

// Initializa the camera and renderer
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
scene.add(camera)
console.log(camera)
// Initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// Instatiate the controls
const controls = new OrbitControls(camera, canvas)

renderer.setSize(window.innerWidth, window.innerHeight)
const renderloop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(renderloop)
}
renderloop()


console.log(window.innerWidth, window.innerHeight)
