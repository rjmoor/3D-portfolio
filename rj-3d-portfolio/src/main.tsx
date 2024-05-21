import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Landing from "./pages/Landing.tsx";
import Base from "./pages/Base.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/base" element={<Base />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
