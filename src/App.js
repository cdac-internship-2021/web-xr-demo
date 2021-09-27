import Model from "./components/Model/Model";
import { glbModels, gltfModels } from "./helpers/models";

function App() {
	return (
		<div className="main-container">
			<Model models={glbModels} type="glb" />
			<Model models={gltfModels} type="gltf" />
			{/* <div className="vr-container">
				<span className="image-name">{vrImages[index].title}</span>
				<img
					className="vrview-thumbnail"
					src={`https://raw.githubusercontent.com/googlearchive/vrview/master/examples/gallery/${vrImages[index].name}-thumbnail.jpg`}
					alt={`${vrImages[index].title}`}
				/>
				<div ref={vrViewRef} id="vrview"></div>
			</div> */}
		</div>
	);
}

export default App;
