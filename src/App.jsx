import { BrowserRouter, Route, Routes } from "react-router-dom";
import ARModel from "./components/ARModel";
import { Home, ARHome, VRHome } from "./components/Home";
import VRModel from "./components/VRModel";

function App() {
	return (
		<BrowserRouter>
			<div className="page-container">
				<Routes>
					<Route path="/web-xr-demo/" element={<Home />} />
					<Route path="/web-xr-demo/ar" element={<ARHome />} />
					<Route path="/web-xr-demo/ar/:id" element={<ARModel />} />
					<Route path="/web-xr-demo/vr" element={<VRHome />} />
					<Route path="/web-xr-demo/vr/:id" element={<VRModel />} />
					<Route path="/web-xr-demo/*" element={<h1>Not found</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
