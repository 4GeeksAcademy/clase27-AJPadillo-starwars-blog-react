import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	// Objeto para mapear nombres de personajes a URLs de imágenes
	const imageMapCharacters = {
		"Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
		"C-3PO": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
		"R2-D2": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
		"Darth Vader": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
		"Leia Organa": "https://starwars-visualguide.com/assets/img/characters/5.jpg",
		"Owen Lars": "https://starwars-visualguide.com/assets/img/characters/6.jpg",
		"Beru Whitesun lars": "https://starwars-visualguide.com/assets/img/characters/7.jpg",
		"R5-D4": "https://starwars-visualguide.com/assets/img/characters/8.jpg",
		"Biggs Darklighter": "https://starwars-visualguide.com/assets/img/characters/9.jpg",
		"Obi-Wan Kenobi": "https://starwars-visualguide.com/assets/img/characters/10.jpg"
	};

	const imageMapPlanets = {
		"Tatooine": "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
		"Alderaan": "https://starwars-visualguide.com/assets/img/planets/2.jpg",
		"Yavin IV": "https://starwars-visualguide.com/assets/img/planets/3.jpg",
		"Hoth": "https://starwars-visualguide.com/assets/img/planets/4.jpg",
		"Dagobah": "https://starwars-visualguide.com/assets/img/planets/5.jpg",
		"Bespin": "https://starwars-visualguide.com/assets/img/planets/6.jpg",
		"Endor": "https://starwars-visualguide.com/assets/img/planets/7.jpg",
		"Naboo": "https://starwars-visualguide.com/assets/img/planets/8.jpg",
		"Coruscant": "https://starwars-visualguide.com/assets/img/planets/9.jpg",
		"Kamino": "https://starwars-visualguide.com/assets/img/planets/10.jpg"
	};

	const imageMapVehicles = {
		"Sand Crawler": "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
		"T-16 skyhopper": "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
		"X-34 landspeeder": "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
		"TIE/LN starfighter": "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
		"Snowspeeder": "https://starwars-visualguide.com/assets/img/vehicles/14.jpg",
		"TIE bomber": "https://starwars-visualguide.com/assets/img/vehicles/16.jpg",
		"AT-AT": "https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
		"AT-ST": "https://starwars-visualguide.com/assets/img/vehicles/19.jpg",
		"Storm IV Twin-Pod cloud car": "https://starwars-visualguide.com/assets/img/vehicles/20.jpg",
		"Sail barge": "https://starwars-visualguide.com/assets/img/vehicles/24.jpg"
	};

	const handleLearnMore = (item) => {
        navigate('/info', { state: item });
    };

	return (
		<>
			<div className="container">
				<h1 className="text-danger">Characters</h1>
				<div className="row">
					{store.personas.map((item, index) =>
						<div className="col-md-3" key={index}>
							<div className="card">
								<img src={imageMapCharacters[item.name]} className="card-img-top overflow-hidden" style={{ maxWidth: "auto", maxHeight: "400px" }} />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Gender: {item.gender}</p>
									<p className="card-text">Hair color: {item.hair_color}</p>
									<p className="card-text">Eye color: {item.eye_color}</p>
									<div className="d-flex justify-content-around">
										<Link>
											<button onClick={() => handleLearnMore(item)} className="btn btn-primary">Learn more!</button>
										</Link>
										<button href="#" className="btn btn-warning">Favorites</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="container">
				<h1 className="text-danger">Planets</h1>
				<div className="row">
					{store.planetas.map((item, index) =>
						<div className="col-md-3" key={index}>
							<div className="card">
								<img src={imageMapPlanets[item.name]} className="card-img-top overflow-hidden" style={{ maxWidth: "auto", maxHeight: "400px" }} />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Population: {item.population}</p>
									<p className="card-text">Terrain: {item.terrain}</p>
									<div className="d-flex justify-content-around">
										<Link>
											<button onClick={() => handleLearnMore(item)} className="btn btn-primary">Learn more!</button>
										</Link>
										<button href="#" className="btn btn-warning">Favorites</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="container">
				<h1 className="text-danger">Vehicles</h1>
				<div className="row">
					{store.vehiculos.map((item, index) =>
						<div className="col-md-3" key={index}>
							<div className="card">
								<img src={imageMapVehicles[item.name]} className="card-img-top overflow-hidden" style={{ maxWidth: "auto", maxHeight: "400px" }} />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Model: {item.model}</p>
									<p className="card-text">Consumables: {item.consumables}</p>
									<div className="d-flex justify-content-around">
										<Link>
											<button onClick={() => handleLearnMore(item)} className="btn btn-primary">Learn more!</button>
										</Link>
										<button href="#" className="btn btn-warning">Favorites</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
