import React from "react";

export const Team = (props) => {
	return (
		<div id="team" className="text-center">
			<div className="container">
				<div className="col-md-8 col-md-offset-2 section-title">
					<h2> Equipe projet</h2>
					<p>
						Des membres travaillent ensemble pour mener à bien le
						projet en répartissant les tâches, en respectant les
						normes de qualité, en gérant les ressources et les
						finances, en communiquant avec les parties prenantes et
						en assurant le développement et la maintenance du
						système d'information.
					</p>
				</div>
				<div id="row">
					{props.data
						? props.data.map((d, i) => (
								<div
									key={`${d.name}-${i}`}
									className="col-md-3 col-sm-6 team"
								>
									<div className="thumbnail">
										{" "}
										<img
											src={d.img}
											alt="..."
											className="team-img"
										/>
										<div className="caption">
											<h4>{d.name}</h4>
											<p>{d.job}</p>
										</div>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};
