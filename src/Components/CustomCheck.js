function CustomCheck(props) {
	if (props.type === 2) {
		return (
			<div className="check" style={{ backgroundColor: '#50AC75' }}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.25vmax" height="1.25vmax" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</div>
		)
	} else if (props.type === 1) {
		return (
			<div className="check" style={{ backgroundColor: '#DBAC5B' }}>
				<div className="smallDot"></div>
			</div>
		)
	} else {
		return (
			<div className="check" style={{ backgroundColor: '#505155' }}></div>
		)
	}
}

export default CustomCheck;