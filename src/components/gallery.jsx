import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
	return (
		<div id="portfolio" className="text-center">
			<div className="container">
				<div className="section-title">
					<h2>Nos projets</h2>
					<p>
						Depuis notre création, nous avons aidé de nombreuses
						entreprises à se transformer numériquement en améliorant
						leur efficacité opérationnelle, leur productivité et
						leur rentabilité. Parmi nos projets :
					</p>
				</div>
				<div className="row">
					<div className="portfolio-items">
						{props.data
							? props.data.map((d, i) => (
									<div
										key={`${d.title}-${i}`}
										className="col-sm-6 col-md-4 col-lg-4"
									>
										<Image
											title={d.title}
											largeImage={d.largeImage}
											smallImage={d.smallImage}
										/>
									</div>
							  ))
							: "Loading..."}
					</div>
				</div>
			</div>
		</div>
	);
};
