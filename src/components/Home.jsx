export const ARHome = () => {
	return <p>Go to /ar/:id for AR Models built using @googl/model-viewer</p>;
};

export const VRHome = () => {
	return <p>Go to /vr/:id for VR Models built using Google's vrview</p>;
};

export const Home = () => {
	return (
		<p>
			<ARHome />
			<VRHome />
		</p>
	);
};
