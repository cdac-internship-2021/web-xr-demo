import { BrowserRouter, Route, Routes } from "react-router-dom";
import ARModel from "./components/ARModel";
import { Home, ARHome, VRHome } from "./components/Home";
import VRModel from "./components/VRModel";

function App() {
	return (
		<BrowserRouter basename="/web-xr-demo">
			<div className="page-container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ar" element={<ARHome />} />
					<Route path="/ar/:id" element={<ARModel />} />
					<Route path="/vr" element={<VRHome />} />
					<Route path="/vr/:id" element={<VRModel />} />
					<Route path="*" element={<h1>Not found</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
