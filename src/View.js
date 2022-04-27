import React from "react";
const Section = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${bgColor};
`;

const View = () => {
	return (
		<>
			<Section bgColor="#000000" />
			<Section bgColor="#333333"/>
		</>
	);
}

export default View;