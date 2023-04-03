function CustomCheck({ type }) {
	if (type) {
		return (
			<div className="Check" style={{ backgroundColor: '#50AC75' }}>
				<svg width="2vmax" height="2vmax" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</div>
		);
	} else {
		return (
			<div className="Check" style={{ backgroundColor: '#505155' }}></div>
		);
	}
}

export default CustomCheck;