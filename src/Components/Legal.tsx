function Legal() {
    const legalList = [
        {
            name: 'Utilité',
            content: <div>Le serveur, pour son bon fonctionnement, enregistre des données telles que votre adresse IP et les notes que vous attribuez aux menus. La récupération de cette adresse ne sert qu’à deux choses : Faire des statistiques de fréquentation, et permettre de ne pas avoir de duplication de note, et c’est tout .</div>
        },{
            name: 'Quand',
            content: <div>L’adresse IP est récupérée lorsque votre ordinateur demande à nos serveurs les menus. Elle est aussi récupérée lorsque que vous notez un menu.</div>
        },{
            name: 'Comment',
            content: <div>Ces données sont stockées chez nous, sur nos serveurs, elles y sont en sécurité : Le serveur passe toutes les exigences de sécurité.</div>
        },{
            name: 'Confiance',
            content: <div>Nous nous engageons à ne jamais revendre ou partager ces données en dehors de l’équipe du site.</div>
        },{
            name: 'Légal',
            content: <div>Si l’enregistrement de l’une de ces données vous pose un problème, vous pouvez nous contacter ici : contact@menuvox.fr</div>
        }
    ]
    function UseList() {
        return (
            <div className="legalBoxs">
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

    return (<div className="legalPage"><UseList /></div>);
}

export default Legal;