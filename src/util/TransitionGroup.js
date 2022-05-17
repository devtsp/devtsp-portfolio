import { useEffect, useState } from 'react';
import { useLocation, Routes } from 'react-router-dom';

const TransitionGroup = ({ children }) => {
	const location = useLocation();

	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState('fadeIn');

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage('fadeOut');
	}, [location, displayLocation]);

	return (
		<div
			className={`${transitionStage}`}
			onAnimationEnd={() => {
				if (transitionStage === 'fadeOut') {
					setTransistionStage('fadeIn');
					setDisplayLocation(location);
				}
			}}
		>
			<Routes location={displayLocation}>{children}</Routes>
		</div>
	);
};

export default TransitionGroup;
