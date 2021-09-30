import { useState } from "react";
import "@google/model-viewer";
import "./styles.css";

const Model = ({ models, type }) => {
	const [model, setModel] = useState(0);
	const [animation, setAnimation] = useState(0);

	return (
		<>
			{models.length !== 0 ? (
				<div className="container">
					<h1 className="title">{type} Models</h1>
					<div className="options-select">
						<div className="model-select">
							<label htmlFor="model">Model</label>
							<select
								id="model"
								onChange={(event) =>
									setModel(parseInt(event.target.value))
								}
							>
								{models.map((model, index) => (
									<option key={index} value={index}>
										{model.name}
									</option>
								))}
							</select>
						</div>
						{models[model].animations.length !== 0 && (
							<div className="animation-select">
								<label htmlFor="animation">Animation</label>
								<select
									id="animation"
									onChange={(event) =>
										setAnimation(
											parseInt(event.target.value)
										)
									}
								>
									{models[model].animations.map(
										(animation, index) => (
											<option key={index} value={index}>
												{animation}
											</option>
										)
									)}
								</select>
							</div>
						)}
					</div>
					{/* @ts-ignore */}
					<model-viewer
						src={`/web-xr-demo/models/${models[model].name}/scene.${type}`}
						alt={`${models[model].name} model`}
						ar
						ar-modes="webxr scene-viewer quick-look"
						environment-image="neutral"
						camera-controls
						autoplay
						animation-name={models[model].animations[animation]}
					/>
					<span className="model-name">
						{models[model].name} Model
					</span>
				</div>
			) : null}
		</>
	);
};

export default Model;
