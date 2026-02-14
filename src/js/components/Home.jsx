import React from "react";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {

	

	return (
		<div className="text-center mt-4">
            

			<h1 className="fw-bold">Traffic Lighter</h1>

			<TrafficLight />

			
			
		</div>
	);
};

export default Home;