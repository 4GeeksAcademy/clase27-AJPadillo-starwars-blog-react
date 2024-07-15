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
			],
			favorites: [
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
					const personas = await Promise.all(data.results.map(async (character) => {
						const details = await getActions().getCharactersInfo(character.uid);
						const { properties, ...basicInfo } = details;
						return {
							...properties,
							...basicInfo,
						}
					}));
					setStore({ personas: personas });
				} catch (error) {
					console.log(error);
				}
			},
			getCharactersInfo: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					const data = await response.json();
					return data.result;
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/")
					const data = await response.json();
					const planetas = await Promise.all(data.results.map(async (planet) => {
						const details = await getActions().getPlanetsInfo(planet.uid);
						const { properties, ...basicInfo } = details;
						return {
							...properties,
							...basicInfo,
						}
						
					}));
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
					const vehiculos = await Promise.all(data.results.map(async (vehicles) => {
						const details = await getActions().getVehiclesInfo(vehicles.uid);
						const { properties, ...basicInfo } = details;
						return {
							...properties,
							...basicInfo,
						}
					}));
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
			toggleFavorites: (customUid, name) => {
				const favorites = getStore().favorites;
				const found = favorites.find((element) => element.uid === customUid);
				if (!found) {
					setStore({ favorites: [...favorites, { uid: customUid, name }] });
				} else {
					getActions().removeFavorites(customUid);
				}
			},
			removeFavorites: (customUid) => {
				const favorites = getStore();
				setStore({ favorites: favorites.favorites.filter(element => element.uid !== customUid) });
			}
		},
	}
}

export default getState;
