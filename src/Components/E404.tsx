function E404({ theme }) {
	let customClass = 'E404';

	if (theme === 'dark') {
		customClass += ' E404Dark'
	}

	return (
		<div className={customClass}>
			La page que vous cherchez n'existe pas.
		</div>
	);
}

export default E404;