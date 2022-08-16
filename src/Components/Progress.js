import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Progress(props) {
	const percentage = props.percentage;
	const duration = props.duration / 1000;
	return (
		<CircularProgressbar
			value={percentage}
			text={`${percentage}%`}
			circleRatio='0.5'
			styles={buildStyles({
				rotation: 0.75,
				strokeLinecap: 'round',
				textSize: '16px',
				pathTransitionDuration: duration,
				pathColor: '#86A3FF',
				textColor: '#F5FEF5',
				trailColor: '#D9D9D9',
			})}
		/>
	);
}

export default Progress;