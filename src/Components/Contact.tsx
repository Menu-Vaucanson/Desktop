function InfoBox({ title, desc, link }) {
	if (link) {
		return (
			<a href={link} className="ContactBox">
				<div className="InfoBoxTitle">{title}</div>
				{desc}
			</a>
		);
	}

	return (
		<div className="ContactBox">
			<div className="InfoBoxTitle">{title}</div>
			{desc}
		</div>
	);
}

function Contact({ theme }) {
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
		{
			title: "GitHub",
			desc: "Le code est disponible ici, vous pouvez également apporter des suggestions et rapporter de bugs.",
			link: "https://github.com/Menu-Vaucanson"
		}
	];

	return (
		<div className={theme === 'dark' ? "Contact ContactDark" : "Contact"}>
			{infos.map((info, i) => {
				return <InfoBox key={i} title={info.title} desc={info.desc} link={info.link} />
			})}
		</div>
	)
}

export default Contact;