import { Link } from "react-router-dom";

function Security() {
    const securityTest: Array<{ name: string, rate: string, colors: string, link: string }> = [
        {
            name: "Mozilla",
            rate: "A+",
            colors: "green",
            link: "https://observatory.mozilla.org/analyze/menuvox.fr"
        },{
            name: "Securityheaders",
            rate: "A+",
            colors: "green",
            link: "https://securityheaders.com/?followRedirects=on&hide=on&q=menuvox.fr"
        },{
            name: "Tls.imirhil",
            rate: "A+",
            colors: "green",
            link: "https://tls.imirhil.fr/https/menuvox.fr"
        },{
            name: "Ssllabs",
            rate: "A+",
            colors: "green",
            link: "https://www.ssllabs.com/ssltest/analyze?d=menuvox.fr"
        },{
            name: "ImmuniWeb",
            rate: "A+",
            colors: "green",
            link: "https://www.immuniweb.com/ssl/menuvox.fr/MnPOVJDs/"
        },{
            name: "Google",
            rate: "all good",
            colors: "green",
            link: "https://csp-evaluator.withgoogle.com/?csp=https://menuvox.fr"
        },{
            name: "Google Transparency",
            rate: "no risk",
            colors: "green",
            link: "https://transparencyreport.google.com/safe-browsing/search?url=menuvox.fr"
        },{
            name: "Hstspreload",
            rate: "validé",
            colors: "green",
            link: "https://hstspreload.org?domain=menuvox.fr"
        },{
            name: "VirusTotal",
            rate: "clean",
            colors: "green",
            link: "https://www.virustotal.com/gui/url/181a40e35c8c6a87622a212da69faf4ca4f851b3e083ddfe10792147857c1fb7"
        },{
            name: "Sitecheck",
            rate: "low risk",
            colors: "green",
            link: "https://sitecheck.sucuri.net/results/menuvox.fr"
        },{
            name: "Quttera",
            rate: "no Malware",
            colors: "green",
            link: "https://quttera.com/detailed_report/menuvox.fr"
        }
    ];
    const otherTest: Array<{ name: string, rate: string, colors: string, link: string }> = [
        {
            name: "Index Education",
            rate: "c",
            colors: "brown",
            link: "https://observatory.mozilla.org/analyze/www.index-education.com"
        },{
            name: "Pronote",
            rate: "D+",
        colors: "purple",
            link: "https://observatory.mozilla.org/analyze/0380033e.index-education.net"
        },{
            name: "Le site du lycée",
            rate: "D+",
            colors: "purple",
            link: "https://lycee-vaucanson-grenoble.web.ac-grenoble.fr/"
        }
    ]
    function CreateComp(dataset: Array<{ name: string, rate: string, colors: string, link: string }>) {
        return <div className="SecurityBoxButons">{
            dataset.map((element) => {
                return <a  className="SecurityBox" href={element.link} target="_blank" rel="noopener noreferrer">
                <div className="SecurityName">
                        {element.name}
                    </div>
                {/* <div className="SecuritySeparator"></div> */}
                <div className={"SecureRate "+element.colors}>
                    note: {element.rate}
                </div>
            </a>
            })
        }</div>
    }
    return (
        <div className="SecurityPage">
            <div className="SecurityBoxs">
                Grace au superbe travaille fait par Wiwok nous nous somme fait certifier par plusieur organisme d'audit de securitée de site web. Ces test certifie que les probleme de securitée les plus frequant ne sont pas utilisable sur ce site.
                Voici quelle que un des site qui nous on certifier :
            </div>
            { CreateComp(securityTest) }
            <div className="ComparateBoxs">
                en comparaison :
            </div>
            {CreateComp(otherTest)}
            <br/>
        </div>
    )
}

export default Security;