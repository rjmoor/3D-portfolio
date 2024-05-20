import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const greetings = [
	{ language: "English", text: "Welcome to RMI - RMoor Industries" },
	{ language: "French", text: "Bienvenue chez RMI - RMoor Industries" },
	{ language: "Spanish", text: "Bienvenido a RMI - RMoor Industries" },
	{ language: "Hindi", text: "आरएमआई - आरमूर इंडस्ट्रीज में आपका स्वागत है" },
	{ language: "Chinese", text: "欢迎来到RMI - RMoor Industries" },
];

const buttons = [
	{ language: "English", text: "Let's go" },
	{ language: "French", text: "Allons-y" },
	{ language: "Spanish", text: "Vamos" },
	{ language: "Hindi", text: "चलो" },
	{ language: "Chinese", text: "走吧" },
];

const generateStars = (numStars: number) => {
	const stars = [];
	for (let i = 0; i < numStars; i++) {
		const style = {
			left: `${Math.random() * 100}vw`,
			top: `${Math.random() * 100}vh`,
			animationDelay: `${Math.random() * 2}s`,
		};
		stars.push(<div key={i} className="star" style={style}></div>);
	}
	return stars;
};

const Home: React.FC = () => {
	const [index, setIndex] = useState(0);
	const [stars, setStars] = useState<JSX.Element[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		setStars(generateStars(200));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
			<div className="stars">{stars}</div>
			<h1 className="text-4xl  mb-6 text-center">{greetings[index].text}</h1>
			<button
				className=" bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-4 hover:bg-blue-700 transition-all"
				onClick={() => navigate("/landing")}
			>
				{buttons[index].text}
			</button>
		</div>
	);
};

export default Home;
