import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>

			<Navbar />

			<section className='hero'>
				<div className='container'>
					<div className='text-wrapper w-full'>
						<h1 className='title'>Contact</h1>
						<p className='description'>
							I am actively looking to work in an environment that will give me
							the opportunity to explore the better version of myself, learn and
							grow in my career, I am also interested in collaboration and
							working together with interesting people. So if you have anything
							for me or an interesting projects for collaboration, please hit me
							up.
						</p>
						<ul className='contact-links'>
							<li className='contact-item'>Email: ejikello123@yahoo.com</li>
							<li className='contact-item'>Phone: +436645156126</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
