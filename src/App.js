import "@google/model-viewer";
import "./App.css";
import { useState } from "react";

function App() {
	const [modelGLB, setModelGLB] = useState("Chair");
	const [modelGLTF, setModelGLTF] = useState("bench");
	const [animation, setAnimation] = useState("Animation 1");

	return (
		<div className='main-container'>
			<span className='demonstration-disclaimer'>GLB Models</span>
			<br />
			<select onChange={(event) => setModelGLB(event.target.value)}>
				<option>Chair</option>
				<option>GeoPlanter</option>
			</select>
			<div className='ar-container'>
				{/* @ts-ignore */}
				<model-viewer
					src={`https://raw.githubusercontent.com/cdac-internship-2021/web-ar-demo/master/src/assets/${modelGLB}/${modelGLB}.glb`}
					alt='A 3D model of an cactus plant'
					ar
					ar-modes='webxr scene-viewer quick-look'
					poster={`https://raw.githubusercontent.com/cdac-internship-2021/web-ar-demo/master/src/assets/${modelGLB}/${modelGLB}.png`}
					environment-image='neutral'
					auto-rotate
					camera-controls
				/>
				<span className='model-name'>{modelGLB} Model</span>
			</div>
			<span className='demonstration-disclaimer'>GLTF Models</span>
			<br />
			<select onChange={(event) => setModelGLTF(event.target.value)}>
				<option>bench</option>
				<option>blake_fbx</option>
			</select>
			<div className='ar-container'>
				{/* @ts-ignore */}
				<model-viewer
					src={`https://raw.githubusercontent.com/cdac-internship-2021/web-ar-demo/master/public/test/${modelGLTF}/scene.gltf`}
					alt='A 3D model of an cactus plant'
					ar
					ar-modes='webxr scene-viewer quick-look'
					poster={`https://raw.githubusercontent.com/cdac-internship-2021/web-ar-demo/master/src/assets/Chair/Chair.png`}
					environment-image='neutral'
					auto-rotate
					camera-controls
				/>
				<span className='model-name'>{modelGLTF} Model</span>
			</div>
			<select onChange={(event) => setAnimation(event.target.value)}>
				<option>01_Run_Armature_0</option>
				<option>02_walk_Armature_0</option>
				<option>03_creep_Armature_0</option>
				<option>04_Idle_Armature_0</option>
				<option>05_site_Armature_0</option>
			</select>
			<div className='ar-container'>
				{/* @ts-ignore */}
				<model-viewer
					src='/models/test/wolf/Wolf-Blender-2.82a.gltf'
					alt='Robot'
					ar
					shadow-intensity='1'
					ar-modes='webxr scene-viewer quick-look'
					auto-rotate
					camera-controls
					autoplay
					animation-name={animation}
				/>
				<span className='model-name'>Robot Model</span>
			</div>
			{/* <div className='vr-container'>
						<span className='image-name'>{vrImages[index].title}</span>
						<img
							className='vrview-thumbnail'
							src={`https://raw.githubusercontent.com/googlearchive/vrview/master/examples/gallery/${vrImages[index].name}-thumbnail.jpg`}
							alt={`${vrImages[index].title}`}
						/>
						<div ref={vrViewRef} id='vrview'></div>
					</div> */}
		</div>
	);
}

export default App;
