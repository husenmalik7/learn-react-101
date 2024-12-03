import { useState, useMemo } from 'react';

export default function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	// const doubleNumber = slowFunction(number);

	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);
	const themeStyles = {
		backgroundColor: dark ? 'black' : 'white',
		color: dark ? 'white' : 'black',
	};

	

	return (
		<>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>

			<button onClick={() => setDark((prevDark) => !prevDark)}>
				change theme
			</button>

			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);

	function slowFunction(num) {
		console.log('calling slow function');
		for (let i = 0; i <= 1000; i++) {
			console.log(num);
		}
		return num * 2;
	}
}
