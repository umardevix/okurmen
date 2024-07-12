/* eslint-disable react/prop-types */

const Button = ({ text }) => {
	return (
		<div>
			<button
				className=' py-2 px-6 	
bg-yellow-500 rounded-full text-white font-semibold'
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
