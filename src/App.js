import React, { useState, useEffect } from 'react';
import './Stylesheets/App.css';
import Progress from './Components/Progress';
import CustomCheck from './Components/CustomCheck';

import todo from './todo';

function App() {
	let dones = 0;
	const RenderTodoList = todo.map((e, i) => {
		/*
		Todo state:
		0 => Incomplete
		1 => Ongoing
		2 => Done
		*/
		if (e.state === 2) dones++;
		return (
			<div className='AppProgressElement' key={i}>
				<div className='AppProgressCheck'><CustomCheck type={e.state} /></div>
				<div className='AppProgressContent'>{e.name}</div>
			</div>
		)
	})

	let [Percentage, setPercentage] = useState(0);

	const WantedPercentage = (dones / todo.length * 100).toFixed(0);
	const animationTime = 2000;

	useEffect(() => {
		const interval = setInterval(() => {
			if (Percentage < WantedPercentage) {
				Percentage++;
				setPercentage(Percentage);
			} else {
				clearInterval(interval);
			}
		}, animationTime / WantedPercentage);
		return () => clearInterval(interval);
	});

	return (
		<div className="App">
			<div className='AppHeader'>
				<div className='progressbarContainer'>
					<Progress percentage={Percentage} duration={animationTime / WantedPercentage} />
				</div>
				<div className='AppTitle'>Le site PC est en construction...</div>
			</div>
			<div className='AppProgress'>
				<div className='AppProgressTitle'>Progression</div>
				<div className='AppProgressList'>
					{RenderTodoList}
				</div>
			</div>
		</div >
	);
}

export default App;
