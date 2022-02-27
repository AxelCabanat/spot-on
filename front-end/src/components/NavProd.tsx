import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllStudio } from '../services/Api';
import UserContext from "../context/UserContext";


const NavProd = () => {
	const { user, setUser } = useContext(UserContext);
	const [ allStudio, setAllStudio ] = useState<any>([]);
	const setData = async () => {
		setAllStudio(await fetchAllStudio());
	};

	useEffect(() => {
		setData();
	}, []);

	return (
		<nav className="flex justify-around w-full fixed bg-white top-0">
			<Link to="/" className="w-1/5">
				spoton
			</Link>
			<Link to="/questionnaires">questionnaire</Link>
			<Link to={`/reponses`}>reponses</Link>
			<Link to={`/studios/${allStudio[0]?.name}`}>Studio test</Link>
			<Link to={`/studios/${allStudio[0]?.name}/admin`}>Studio dashboard</Link>
			{user ? (
				<Link to={`/user/${user.username}`}>Votre Compte</Link>
			):(
				<>
					<Link to="/login">Login</Link>
					<Link to="/register">Inscription</Link>
				</>
			) }
		</nav>
	);
};

export default NavProd;
