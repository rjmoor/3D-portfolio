import React from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Loader } from "@react-three/drei";


const Island: React.FC = () => {
	const gltf = Loader(GLTFLoader, "../assets/Three/Land/valley/scene.gltf");
	return <primitive object={gltf.scene} />;
};

const Skyscraper: React.FC = () => {
	const gltf = Loader(GLTFLoader, "../assets/Three/Infrastructure/RMI-skyscraper/scene.gltf");
	return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

const Landing: React.FC = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Island />
			<Skyscraper />
			<OrbitControls />
		</Canvas>
	);
};

export default Landing;
