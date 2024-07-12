const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [
				{
				}
			],
			planetas: [
				{
				}
			],
			vehiculos: [
				{
				}
			]
		},
		actions: {
			// exampleFunction: () => {
			// 	getActions().getCharactersInfo();
			// },
			// Use getActions to call a function within a fuction
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/")
					const data = await response.json();
					const personas = await Promise.all(data.results.map((character) => getActions().getCharactersInfo(character.uid)));
					setStore({ personas: personas });
				} catch (error) {
					console.log(error);
				}
			},
			getCharactersInfo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const data = await response.json();
					return data.result.properties;
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json();
					const planetas = await Promise.all(data.results.map((planet) => getActions().getPlanetsInfo(planet.uid)));
					setStore({ planetas: planetas });
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetsInfo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					const data = await response.json();
					return data.result.properties;
				} catch (error) {
					console.log(error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/")
					const data = await response.json();
					const vehiculos = await Promise.all(data.results.map((vehicles) => getActions().getVehiclesInfo(vehicles.uid)));
					setStore({ vehiculos: vehiculos });
				} catch (error) {
					console.log(error);
				}
			},
			getVehiclesInfo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					const data = await response.json();
					return data.result.properties;
				} catch (error) {
					console.log(error);
				}
			},
		},
	}
}

export default getState;
