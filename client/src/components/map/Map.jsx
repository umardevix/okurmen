const Map = () => {
	return (
		<div className='container'>
			<div className='w-full'>
				<div className='block inline-block md:flex justify-between items-center mt-[140px]'>
					<h1 className='text-4xl font-semibold'>
						Биздин <span className='text-yellow-500'>дарек</span>
					</h1>
					<div className='mt-3'>
						<p>Бишкек, Куренкеев көчөсү, 138</p>
						<p className='mt-2'>+996 (700) 232 400</p>
					</div>
				</div>
				<div className='w-full h-full mt-[60px] mb-[70px]'>
					<iframe
						className='rounded-xl w-full h-[500px]'
						src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d187113.7401323519!2d74.30539463281248!3d42.8801848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x389ec81915eaf75d%3A0x9bfedde3851dcd21!2zTWF4aW11bSwgMTA5LTEg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6!3m2!1d42.880184799999995!2d74.585546!5e0!3m2!1sru!2skg!4v1718703344755!5m2!1sru!2skg'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Map;
