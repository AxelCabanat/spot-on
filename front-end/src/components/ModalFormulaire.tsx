import { Link } from 'react-router-dom';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const ModalFormulaire = ({ isOpen, setIsOpen }: Props) => {
	return (
		<div>
			<div className={isOpen ? 'landingPageModal' : 'hidden'}>
				<p className="text-3xl">
					Merci pour l’intérêt que vous portez à Spot-On Studio !
				</p>
				<p className="text-2xl">It’s coming soon !</p>
				<p className="text-2xl">
					Faites partie de notre clientèle privilégiée en répondant à ces 2
					questions{' '}
				</p>
				<div className="modalButtonsDiv">
					<Link to="/questions">
						<button className="modalButton">LET'S GO ! </button>
					</Link>
					<button className="modalButton" onClick={() => setIsOpen(false)}>
						Non merci{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalFormulaire;
