import { useState, useEffect } from 'react';
import CalendarComp from './CalendarComp'
const url = 'https://menuvox.fr:8080';
// import axios from 'axios';   
function SelectDate({ theme, date }) {
    function getMenus(date) {
        setMenu(
            <div>
                <CalendarComp callback={getMenus} />
                <div className="MenuWaiting">
                    <div className={theme === 'dark' ? 'WaitingError WaitingErrorDark' : "WaitingError"}>
                        vous regarder le menu du {new Date(date).toLocaleDateString()}
                    </div>
                </div >
            </div>
        )
    }



    const [menu, setMenu] = useState(
        <div>
            <CalendarComp callback={getMenus} />
            <div className="MenuWaiting">
                <div className={theme === 'dark' ? 'WaitingError WaitingErrorDark' : "WaitingError"}>
                    Récupération des menus en cours...
                </div>
            </div >
        </div>
    );
    return (
        menu
    )
}
export default SelectDate