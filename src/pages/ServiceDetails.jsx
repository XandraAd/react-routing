/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../Data";


const ServiceDetails = () => {
	const { id } = useParams();

return (
		<>
			<h1>This is the Service Details page</h1>
			{ServicesData.map((service) => {
				if (service.id ===  id)
					return (
						<div>
							<p>Name:{service.name}</p>
							<p>Details:{service.details}</p>
							
						</div>
					);
			})}
		</>
	);
};

export default ServiceDetails;







