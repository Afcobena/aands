import { motion } from 'framer-motion';

import React from 'react';

function Connectivity() {
	const width = 317;
	const height = 80;
	const path =
		'M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80';

	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill='none'
		>
			{/* line */}
			<path d={path} stroke='white' strokeOpacity='1' fill='none' />
			{/* colour line */}
			<path
				d={path}
				stroke='url(#pulse-1)'
				strokeLinecap='round'
				strokeWidth='5'
				fill='none'
			/>
			<defs>
				<motion.linearGradient
					animate={{
						x1: [0, width * 2],
						x2: [0, width],
						y1: [height, height / 2],
						y2: [height * 2, height],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
					}}
					id='pulse-1'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#2EB9DF' stopOpacity='0' />
					<stop stopColor='#2EB9DF' />
					<stop offset='1' stopColor='#9E00FF' stopOpacity='0' />
				</motion.linearGradient>
			</defs>
		</svg>
	);
}

export default Connectivity;
