import React from "react";
import { useLocation } from "react-router-dom";

export const InfoPlanets = () => {
    const location = useLocation();
    const item = location.state;

    const imageMapPlanetsInfo = {
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

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-6">
                    <img src={imageMapPlanetsInfo[item.name]} className="img-fluid img-thumbnail"/>
                </div>
                <div className="col-md-6">
                    <h1>{item.name}</h1>
                    <p className="fs-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div style={{ height: '5px' }} className="border m-5 bg-danger"></div>
            <div className="row d-flex align-items-center justify-content-center text-danger">
                <div className="col-md-2">
                    <p>Name:</p>
                    <p>{item.name}</p>
                </div>
                <div className="col-md-2">
                    <p>Climate:</p>
                    <p>{item.climate}</p>
                </div>
                <div className="col-md-2">
                    <p>Orbital period:</p>
                    <p>{item.orbital_period}</p>
                </div>
                <div className="col-md-2">
                    <p>Rotation period:</p>
                    <p>{item.rotation_period}</p>
                </div>
                <div className="col-md-2">
                    <p>Terrain:</p>
                    <p>{item.terrain}</p>
                </div>
            </div>
        </div>
    );
}