import "@google/model-viewer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ARModel = () => {
	const [model, setModel] = useState(null);
	const { id } = useParams();

	const getModels = async () => {
		const response = await fetch(
			"https://raw.githubusercontent.com/cdac-internship-2021/models/main/models.json"
		).then((data) => data.json());
		const models = response.models;
		const filteredModels = models.filter((model) => "poster" in model);
		setModel(filteredModels[id]);
	};

	useEffect(() => {
		if (id !== null || id !== undefined) {
			getModels();
		}
	}, [id]);

	return (
		<div className="ar-container">
			{model !== null && (
				<>
					{/* @ts-ignore */}
					<model-viewer
						src={`https://raw.githubusercontent.com/cdac-internship-2021/models/main/${model.name}/scene.gltf`}
						alt={`${model.name} model`}
						ar
						ar-modes="webxr scene-viewer quick-look"
						environment-image="neutral"
						camera-controls
						autoplay
					/>
				</>
			)}
		</div>
	);
};

export default ARModel;
