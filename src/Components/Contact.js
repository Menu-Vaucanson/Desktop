function InfoBox({ title, desc }) {
	return (
		<div className="InfoBox">
			<div className="InfoBoxTitle">{title}</div>
			{desc}
		</div>
	)
}

function Contact() {
	const infos = [
		{
			title: "E-mail",
			desc: "contact@menuvox.fr"
		},
		{
			title: "Discord",
			desc: "Wiwok: Wiwok#2553 Unel: Unel#1527"
		},
		{
			title: "Rencontre",
			desc: "Vous pouvez nous trouver en TSTI2D2 au lycée Vaucanson."
		},
	];

	return (
		<div className="Contact">
			{infos.map((info, i) => {
				return <InfoBox key={i} title={info.title} desc={info.desc} />
			})}
		</div>
	)
}

export default Contact;