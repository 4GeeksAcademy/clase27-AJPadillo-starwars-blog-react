import React from "react";

export const VehiclesCard = ({ store, actions, imageMapVehicles, handleVehicles }) => {
    return (
        <div className="row d-flex flex-nowrap flex-row overflow-scroll overflow-y-hidden">
            {store.vehiculos.map((item, index) =>
                <div className="col-md-3" key={index}>
                    <div className="card" style={{ height: "100%" }}>
                        <img src={imageMapVehicles[item.name]} className="card-img-top" alt="..." />
                        <div className="card-body" >
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Model: {item.model}</p>
                            <p className="card-text">Length: {item.length}</p>
                            <div className="d-flex justify-content-around">
                                <button onClick={() => handleVehicles(item)} className="btn btn-primary">Learn more!</button>
                                <button onClick={() => actions.toggleFavorites(`vehicle-${item.uid}`, item.name)} className="btn btn-warning">{actions.isFavorite(`vehicle-${item.uid}`) ? '❤️' : '🖤'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}