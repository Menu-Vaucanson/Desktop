function Security() {
	function TheirSecurity() {
		const TheirTests: Array<{ name: string, rate: string, color: string, link: string }> = [
			{
				name: "Index Education (Mozilla Observatory)",
				rate: "C",
				color: "yellow",
				link: "https://observatory.mozilla.org/analyze/www.index-education.com"
			},
			{
				name: "PRONOTE (Mozilla Observatory)",
				rate: "D+",
				color: "orange",
				link: "https://observatory.mozilla.org/analyze/0380033e.index-education.net"
			},
			{
				name: "Lycée Vaucanson (Mozilla Observatory)",
				rate: "D+",
				color: "orange",
				link: "https://observatory.mozilla.org/analyze/lycee-vaucanson-grenoble.web.ac-grenoble.fr"
			}
		];

		return (
			<div className="SecurityBoxs">
				{TheirTests.map((element, i) => {
					return (
						<a className="SecurityBox" href={element.link} target="_blank" rel="noreferrer" key={i}>
							<div className="SecurityName">
								{element.name}
							</div>
							<div className={"SecurityRate " + element.color}>
								Note: {element.rate}
							</div>
						</a>
					);
				})}
			</div>
		);
	}

	function OurSecurity() {
		const OurTests: Array<{ name: string, rate: string, color: string, link: string }> = [
			{
				name: "Mozilla Observatory",
				rate: "A+",
				color: "green",
				link: "https://observatory.mozilla.org/analyze/menuvox.fr"
			},
			{
				name: "Security Headers",
				rate: "A+",
				color: "green",
				link: "https://securityheaders.com/?followRedirects=on&hide=on&q=menuvox.fr"
			},
			{
				name: "CryptCheck",
				rate: "A+",
				color: "green",
				link: "https://tls.imirhil.fr/https/menuvox.fr"
			},
			{
				name: "SSL Labs",
				rate: "A+",
				color: "green",
				link: "https://www.ssllabs.com/ssltest/analyze?d=menuvox.fr"
			},
			{
				name: "ImmuniWeb",
				rate: "A+",
				color: "green",
				link: "https://www.immuniweb.com/ssl/menuvox.fr/MnPOVJDs/"
			},
			{
				name: "Google Transparency",
				rate: "No risk",
				color: "green",
				link: "https://transparencyreport.google.com/safe-browsing/search?url=menuvox.fr"
			},
			{
				name: "SiteCheck",
				rate: "Low risk",
				color: "green",
				link: "https://sitecheck.sucuri.net/results/menuvox.fr"
			},
			{
				name: "Virus Total",
				rate: "Clean",
				color: "green",
				link: "https://www.virustotal.com/gui/url/e0b6251bbfeb152c2e4210c9ab60d03e2b7d29fceae7cf6d33989ea63d329285?nocache=1"
			},
			{
				name: "Quttera",
				rate: "No Malware",
				color: "green",
				link: "https://quttera.com/detailed_report/menuvox.fr"
			}
		];

		return (
			<div className="SecurityBoxs">
				{OurTests.map((element, i) => {
					let customClass = 'SecurityBox1';
					if (i % 3 === 1) {
						customClass = 'SecurityBox2';
					} else if (i % 3 === 2) {
						customClass = 'SecurityBox3';
					}
					return (
						<a className={"SecurityBox " + customClass} href={element.link} target="_blank" rel="noreferrer" key={i}>
							<div className="SecurityName">
								{element.name}
							</div>
							<div className={"SecurityRate " + element.color}>
								Note: {element.rate}
							</div>
						</a>
					);
				})}
			</div>
		);
	}

	return (
		<div className="SecurityPage">
			<div className="SecurityText">
				Grâce au super travail effectué par Wiwok, nous avons sollicité la certification de plusieurs organismes d'audit de sécurité web. Ces tests certifient que les problèmes de sécurité les plus fréquents ne sont pas présents sur ce site.
				Voici quelques-uns des sites qui nous ont certifié :
			</div>
			<OurSecurity />
			<div className="SecurityText">
				Comparaisons
			</div>
			<TheirSecurity />
		</div>
	);
}

export default Security;