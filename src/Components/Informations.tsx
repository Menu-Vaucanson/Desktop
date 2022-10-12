import { Link } from "react-router-dom";

function InfoBox({ info, className }) {
	if (info.contact) {
		return (
			<Link to={'/Contact'} className={"InfoBox " + className}>
				<div className="InfoBoxTitle">{info.title}</div>
				{info.desc}
			</Link>
		);
	}

	if (info.legal) {
		return (
			<Link to={'/Legal'} className={"InfoBox " + className}>
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
			contact: true
		},
		{
			title: "Légal",
			desc: "Cliquez ici pour accéder aux mentions légales.",
			legal: true
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
			desc: "Le menu affiché n’est qu’une copie de ceux publiés par l'établissement, aucune information n’est donc garantie."
		},
		{
			title: "Publication",
			desc: "Nous récupérons les menus manuellement. Ils seront donc disponibles entre le vendredi soir et le mardi."
		}
	];

	return (
		<div className={theme === 'dark' ? "Informations InformationsDark" : 'Informations'}>
			{infos.map((info, i) => {
				let customClass = 'InfoBoxAnimate' + i;
				if (info.contact) {
					return <InfoBox key={i} info={info} className={customClass} />
				}
				return <InfoBox key={i} info={info} className={customClass} />
			})}
		</div>
	);
}

export default Informations;