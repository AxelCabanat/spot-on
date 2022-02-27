import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { Studio } from '../interfaces';
import { fetchStudioByName } from '../services/Api';

export default function WithStudio() {
	const { studioName } = useParams();
	const [ studio, setStudio ] = useState<Studio>();

	const setData = async () => {
		setStudio(await fetchStudioByName(studioName));
	};

	useEffect(() => {
		setData();
	}, []);

	return studio ? <Outlet context={{ studio, setStudio }} /> : <p>Chargement du studio ...</p>;
}
