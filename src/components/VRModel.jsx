import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const VRModel = () => {
	const vrViewRef = useRef(null);
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

	useEffect(() => {
		if (model !== null) {
			vrViewRef.current = new window.VRView.Player("#vrview", {
				image: `https://raw.githubusercontent.com/cdac-internship-2021/models/main/${model.name}/scene.gltf`,
				preview: `${model.poster}`,
			});
		}
	}, [model]);

	return (
		<div className="vr-container">
			<div ref={vrViewRef} id="vrview"></div>
		</div>
	);
};

export default VRModel;
