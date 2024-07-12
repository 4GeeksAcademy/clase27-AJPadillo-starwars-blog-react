import React from "react";
import { useLocation } from "react-router-dom";

export const InfoVehicles = () => {
    const location = useLocation();
    const item = location.state;

    const imageMapVehiclesInfo = {
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
    }

    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-6">
                    <img src={imageMapVehiclesInfo[item.name]} className="img-fluid img-thumbnail"/>
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
                    <p>Length:</p>
                    <p>{item.length}</p>
                </div>
                <div className="col-md-2">
                    <p>Model:</p>
                    <p>{item.model}</p>
                </div>
                <div className="col-md-2">
                    <p>Manufacturer:</p>
                    <p>{item.manufacturer}</p>
                </div>
                <div className="col-md-2">
                    <p>Passengers:</p>
                    <p>{item.passengers}</p>
                </div>
            </div>
        </div>
    );
}