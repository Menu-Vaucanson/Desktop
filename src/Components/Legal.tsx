import { Link } from 'react-router-dom';
function Legal({ theme }) {
    const legalList = [
        {
            name: 'Utilisation',
            content: <div>Le serveur, pour son bon fonctionnement, enregistre des données telles que votre adresse IP et les notes que vous attribuez aux menus. La récupération de cette adresse ne sert qu’à deux choses : Faire des statistiques de fréquentation, et permettre de ne pas avoir de duplication de note, et c’est tout.</div>
        },{
            name: 'La récuperation',
            content: <div>L’adresse IP est récupérée lorsque votre ordinateur demande à nos serveurs les menus. Elle est aussi récupérée lorsque que vous notez un menu.</div>
        },{
            name: 'Le stockage',
            content: <div>Ces données sont stockées chez nous, sur nos serveurs, elles y sont en sécurité : Le serveur passe toutes les <Link to='/Security'><u>exigences de sécurité</u>.</Link></div>
        },{
            name: 'Notre engagement',
            content: <div>Nous nous engageons à ne jamais revendre ou partager ces données en dehors de l’équipe du site.</div>
        },{
            name: 'Des questions',
            content: <div>Si l’enregistrement de l’une de ces données vous pose un problème, vous pouvez nous contacter ici : <a href="mailto:contact@menuvox.fr"><u>contact@menuvox.fr</u></a></div>
        }
    ]
    function UseList({ theme }) {
        console.log(theme);
        return (
            <div className={theme === 'dark' ? "legalBoxs legalBoxsDark" : 'legalBoxs'}>
                {legalList.map((Element: { name: string, content: JSX.Element },i) => {
                    return (
                        <div className="legalBox" key={i}>
                            <div className="legalTitle">
                                {Element.name}
                            </div>
                            <div className="legalContent">
                                {Element.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (<div className="legalPage"><UseList theme={theme} /></div>);
}

export default Legal;