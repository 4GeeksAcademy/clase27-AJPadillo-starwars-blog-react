import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1oxYa16QkYbSAjstrwIqAeIOoRjZuIM4ow&s" style={{ width: "150px" }} /></span>
			</Link>
			<div className="btn-group dropstart me-3">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					{store.favorites.length} Favorites
				</button>
				<ul className="dropdown-menu">
					{store.favorites.length > 0 ? (store.favorites.map((item, index) => (
						<li className="dropdown-item d-flex justify-content-between align-items-center" key={index}>{item.name}<span
							className="delete-btn btn btn-sm fs-3"
							onClick={() => actions.removeFavorites(item.uid)}
						>
							&times;
						</span></li>
					))) : (
						<li className="dropdown-item">Empty</li>
					)}

				</ul>
			</div>
		</nav>
	);
};
