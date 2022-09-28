function MonthComp({ callback }) {
	function change() {
		const week = document.getElementById("week").value.split('-');
		const Week = getDateOfWeek((parseInt(week[1][1]) * 10) + parseInt(week[1][2]), week[0]);
		callback(new Date(Week));
	}

	return (
		<input onChange={change} className="MonthSelection" id="week" type="week" />
	)
}

function getDateOfWeek(w, y) {
	var simple = new Date(y, 0, 1 + (w - 1) * 7);
	var dow = simple.getDay();
	var ISOweekStart = simple;
	if (dow <= 4) {
		ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
	} else {
		ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
	}
	return ISOweekStart;
}

export default MonthComp;