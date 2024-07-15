import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { imageMapCharacters, imageMapPlanets, imageMapVehicles } from "../store/imagenesUrl";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { VehiclesCard } from "../component/vehiclesCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleCharacters = (item) => {
		navigate('/infoCharacters', { state: item });
	};
	const handlePlanets = (item) => {
		navigate('/infoPlanets', { state: item });
	};
	const handleVehicles = (item) => {
		navigate('/infoVehicles', { state: item });
	};

	return (
		<>
			<div className="container">
				<h1 className="text-danger mb-4">Characters</h1>
				<CharactersCard store={store} actions={actions} imageMapCharacters={imageMapCharacters} handleCharacters={handleCharacters} />
			</div>
			<div className="container">
				<h1 className="text-danger mb-4">Planets</h1>
				<PlanetsCard store={store} actions={actions} imageMapPlanets={imageMapPlanets} handlePlanets={handlePlanets} />
			</div>
			<div className="container">
				<h1 className="text-danger mb-4">Vehicles</h1>
				<VehiclesCard store={store} actions={actions} imageMapVehicles={imageMapVehicles} handleVehicles={handleVehicles} />
			</div>
		</>
	)
}
