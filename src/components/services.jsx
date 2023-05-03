import React from "react";

export const Services = (props) => {
	return (
		<div id="services" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Nos Services</h2>
					<p>
						UtoTech propose des services à la fois en tant que
						maître d'œuvre (MOA) et en tant qu'assistant à la
						maîtrise d'ouvrage (AMO).
					</p>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className="col-md-4"
								>
									{" "}
									<i className={d.icon}></i>
									<div className="service-desc">
										<h3>{d.name}</h3>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
