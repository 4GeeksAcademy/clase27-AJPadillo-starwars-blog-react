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
			exampleFunction: () => {
				getActions().getCharactersInfo();
			  },
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
					console.log(personas);
					setStore({ personas: personas });
				} catch (error) {
					console.log(error);
				}
			},
			getCharactersInfo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const data = await response.json();
					// console.log(data.result.properties);
					return data.result.properties;
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json();
					setStore({ planetas: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/")
					const data = await response.json();
					setStore({ vehiculos: data.results });
				} catch (error) {
					console.log(error);
				}
			},
		},
	}
}

export default getState;
