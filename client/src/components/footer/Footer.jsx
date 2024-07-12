import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';
import Button from '../../ui/Button';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer className='bg-black'>
			<div className='container'>
				<div className='py-[20px] border-b-2 md:flex justify-between items-center text-white'>
					<div className='mt-[40px] flex flex-col items-center md:block'>
						<img src='/public/images/logo.png' alt='' />
						<div className='mt-[20px] flex items-center gap-3'>
							<Button text='Консультация' />
							<button className='w-full md:w-[253px] border border-gray-500 text-white py-2 px-2 rounded-full'>
								Куренкеев көчөсү 138
							</button>
						</div>
						<div className='text-white text-lg flex gap-2 mt-[20px] '>
							<div className='w-[30px] h-[30px] bg-gray-600 p-1 rounded-full flex items-center justify-center'>
								<IoLogoWhatsapp />
							</div>
							<div className='w-[30px] h-[30px] bg-gray-600 p-1 rounded-full flex items-center justify-center'>
								<IoLogoInstagram />
							</div>
							<div className='w-[30px] h-[30px] bg-gray-600 p-1 rounded-full flex items-center justify-center'>
								<FaTelegramPlane />
							</div>
							<div className='w-[30px] h-[30px] bg-gray-600 p-1 rounded-full flex items-center justify-center'>
								<FiMail />
							</div>
						</div>
					</div>

					<div className='hidden md:flex gap-5'>
						<ul>
							<li>Башкы бет</li>
							<li>Курстар</li>
							<li>Компания жөнүндө</li>
							<li>Менторлор</li>
							<li>Окуялар</li>
						</ul>
						<ul>
							<li>Ресурстар</li>
							<li>IT Клуб</li>
							<li>
								<a>Билимдүү жаштар</a>
							</li>
							<li>Жетекчилик</li>
						</ul>
					</div>
				</div>
				<div className='text-gray-500 py-8 text-center'>
					<h1>© 2021-2024 Motion Web Academy</h1>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
