import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; 

export const Navbar = () => {
  const {store}=useContext(Context);
  const {actions}=useContext(Context)

	return (
		<div>
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 mx-5"><img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png"  width="55"
                                  height="45" alt="" /></span>
			</Link>


			<li className="nav dropdown">
    <a className="nav-link dropdown-toggle btn btn-primary text-white mx-5" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
	<ul className="dropdown-menu mx-5">
        {store.favoritos.map((item, index) => <div className="row" key={index}><button className="list-group-item btn btn-outline-primary col-10">{item.nombresdecadatema} {index.id} 
        <button
						className="btn btn-secondary rounded opacity-10 mx-0 "
						type="button"
						id="eliminar"
						onClick={() =>actions.eliminarDatos(item)}
						>
						<i class="fa fa-trash" aria-hidden="true"></i>
						</button>
        </button></div>)}
    </ul>
    </li>
          
		</nav>
		</div>
	);
};
