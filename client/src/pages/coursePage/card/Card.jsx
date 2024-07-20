import English from '../../../../public/images/orator.webp'

const Card = () => {
	return (
		<div className='w-full md:w-[300px] border border-gray-300 rounded-[16px] mt-3'>
			<div className='w-full bg-[#F9F9F9] flex items-center justify-center rounded-[16px]'>
				<img className='w-[198px] h-[198px]' src={English} alt='' />
			</div>
			<div className='px-8 py-3 w-full rounded-[16px] bg-white'>
				<h3 className='text-lg font-semibold'>АйэМ методу</h3>
				<p>Биздин студенттер үчүн окуу программасы башталгандан тарта аяктаганга чейин англис тили сабагы акысыз үйрөтүлөт.</p>
			</div>
		</div>
	);
};

export default Card;
