import { Link } from "react-router-dom";

function InfoBox({ info, className }) {
	if (info.link) {
		return (
			<Link to={info.link} className={"InfoBox InfoBoxContact " + className}>
				<div className="InfoBoxTitle">{info.title}</div>
				{info.desc}
			</Link>
		);
	}

	return (
		<div className={"InfoBox " + className}>
			<div className="InfoBoxTitle">{info.title}</div>
			{info.desc}
		</div>
	);
}

function Informations({ theme }) {
	const infos = [
		{
			title: "Contact",
			desc: "Vous pouvez nous contacter en cliquant ici.",
			link: '/Contact'
		},
		{
			title: "Légal",
			desc: "Cliquez ici pour accéder aux mentions légales.",
			link: '/Legal'
		},
		{
			title: "Le code",
			desc: "Le site est réalisé en HTML, CSS et JavaScript (TypeScript) avec React. Le code source est disponible sur GitHub."
		},
		{
			title: "Des questions ?",
			desc: "Si vous avez une idée, une suggestion, un bug à rapporter, etc... vous pouvez nous contacter via la page de contact."
		},
		{
			title: "Fiabilité",
			desc: "Les menus affichés ne sont que des copies de ceux fournis par l'établissement. Ils sont également sous réserve de modification."
		},
		{
			title: "Publication",
			desc: "Les menus nous sont transmis par l'établissement. Ils seront disponibles en fin de semaine."
		}
	];

	return (
		<div className={theme === 'dark' ? "Informations InformationsDark" : 'Informations'}>
			{infos.map((info, i) => {
				return (<InfoBox key={i} info={info} className={'InfoBoxAnimate' + i} />);
			})}
		</div>
	);
}

export default Informations;