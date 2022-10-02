import { Link } from "react-router-dom";

function Security() {
    const securityTest: Array<{ name: string, rate: string, colors: string, link: string }> = [
        {
            name: "mozilla",
            rate: "A+",
            colors: "green",
            link: "https://observatory.mozilla.org/analyze/menuvox.fr"
        },
        {
            name: "google",
            rate: "all good",
            colors: "green",
            link: "https://csp-evaluator.withgoogle.com/?csp=https://menuvox.fr"

        }
    ];
    function CreateComp() {
        return <div>{
            securityTest.map((element) => {
                return <a  className={"SecurityBox "+element.colors} href={element.link} target="_blank" rel="noopener noreferrer">
                <div className="SecurityName">
                    {element.name}
                </div>  
                <div className="Rate">
                    note: {element.rate}
                </div>
            </a>
            })
        }</div>
    }
    CreateComp();
    return (
        <div className="SecurityBoxs">
            Grace au superbe travaille fait par Wiwok nous nous somme fait certifier par plusieur organisme d'audit de securitée de site web. Ces test certifie que les probleme de securitée les plus frequant ne sont pas utilisable sur ce site.
            Voici quelle que un des site qui nous on certifier :
            <CreateComp/>
        </div>
    )
}

export default Security;