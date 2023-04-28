function MonthComp({ callback, theme, oldDate }) {
	function weekNumber(date: Date) {
		const firstJanuary = new Date(date.getFullYear(), 0, 1);
		const dayNr = Math.ceil((date.getTime() - firstJanuary.getTime()) / (24 * 60 * 60 * 1000));
		return Math.ceil((dayNr + firstJanuary.getDay()) / 7) - 1;
	}

	function getDateOfWeek(w: number, y: number) {
		const simple = new Date(y, 0, 1 + (w - 1) * 7);
		const dow = simple.getDay();
		const ISOweekStart = simple;
		if (dow <= 4) {
			ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
		} else {
			ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
		}
		return ISOweekStart;
	}

	function change() {
		const week = (document.getElementById("week") as HTMLInputElement).value.split('-');
		const Week = getDateOfWeek((parseInt(week[1][1]) * 10) + parseInt(week[1][2]), parseInt(week[0]));
		callback(new Date(Week));
	}

	const week = isNaN(weekNumber(oldDate)) ? weekNumber(new Date()) : weekNumber(oldDate);
	return (
		<input onChange={change} className={theme === 'dark' ? 'MonthSelection MonthSelectionDark' : 'MonthSelection'} id="week" type="week" defaultValue={oldDate.getFullYear() + '-W' + (week + 1)} />
	);
}


export default MonthComp;