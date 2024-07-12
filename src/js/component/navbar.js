import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1oxYa16QkYbSAjstrwIqAeIOoRjZuIM4ow&s" style={{ width: "150px" }} /></span>
			</Link>
			<div class="btn-group dropstart me-3">
				<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Dropstart
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Menu item</a></li>
					<li><a class="dropdown-item" href="#">Menu item</a></li>
					<li><a class="dropdown-item" href="#">Menu item</a></li>
				</ul>
			</div>


		</nav>
	);
};
