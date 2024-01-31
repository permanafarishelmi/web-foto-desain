import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      	Berikut portfolio yang pernah saya buat sebelumnya.
			      </p>

			      <div className="portfolio-wrapper">
					{/* awal box */}
					<div className="portfolio-item">
			      		<img src="/aes1.jpg" className="portfolio-image" />
						  <a href="https://web-desain-logo.vercel.app//">
								<h4 className="portfolio-name">Fotografi</h4>
							</a>
			      		<div className="portfolio-category">Photograph</div>
			      	</div>
					{/* akhir box */}
					{/* awal box */}
			      	<div className="portfolio-item">
			      		<img src="/asmaraku-radio16.png" className="portfolio-image" />
						  <a href="https://web-desain-logo.vercel.app//">
								<h4 className="portfolio-name">Desain logo</h4>
							</a>
			      		<div className="portfolio-category">Logo Design</div>
			      	</div>
					{/* akhir box */}
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;