import { useState, useMemo } from 'react';

export default function App() {
	const [number, setNumber] = useState(0);
	const doubleNumber = slowFunction(number);

	// const doubleNumber = useMemo(() => {
	// 	return slowFunction(number);
	// }, [number]);

	return (
		<>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>

			{doubleNumber}
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
