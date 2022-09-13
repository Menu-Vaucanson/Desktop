import { Link } from "react-router-dom"

function InfoBox({ title, desc, contact }) {
	if (contact === true) {
		return (
			<Link to={'/Contact'} className="InfoBox">
				<div className="InfoBoxTitle">{title}</div>
				{desc}
			</Link>
		)
	}

	return (
		<div className="InfoBox">
			<div className="InfoBoxTitle">{title}</div>
			{desc}
		</div>
	)
}

function Informations() {
	const infos = [
		{
			title: "Contact",
			desc: "Vous pouvez nous contacter en cliquant ici.",
			contact: true
		},
		{
			title: "Qui sommes-nous ?",
			desc: "Nous sommes trois élèves en terminale STI2D."
		},
		{
			title: "La réalisation",
			desc: "Le site est réalisé en HTML, CSS et Javascript avec React. Le code source est disponible sur GitHub."
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
	]

	return (
		<div className="Informations">
			{infos.map((info, i) => {
				if (info.contact) {
					return <InfoBox key={i} title={info.title} desc={info.desc} contact={true} />
				}
				return <InfoBox key={i} title={info.title} desc={info.desc} contact={false} />
			})}
		</div>
	)
}

export default Informations;