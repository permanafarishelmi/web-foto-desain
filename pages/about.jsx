import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
				  Selamat datang di dunia visual kreatif saya! Saya adalah Faris Helmi Permana, seorang fotografer dan desainer logo berdedikasi yang berusaha untuk menghadirkan keindahan dan makna melalui karya-karya saya.
				  <br />
				  <br />
				  Dalam dunia fotografi, saya mengeksplorasi momen-momen yang indah dan bermakna, menciptakan potret yang menceritakan cerita unik setiap kali tombol kamera ditekan. Kecintaan saya pada estetika visual tercermin dalam pemotretan potret, pernikahan, dan produk, di mana setiap detail diabadikan dengan keindahan dan kecerdasan.
				  <br />
				  <br />
				  Sebagai seorang desainer logo, saya memahami pentingnya identitas visual yang kuat untuk setiap bisnis. Dengan perpaduan kreativitas dan strategi desain, saya menciptakan logo yang tidak hanya menarik mata, tetapi juga mencerminkan esensi dan karakter unik dari setiap merek.
				  <br />
				  <br />
				  Portofolio saya mencakup berbagai proyek yang menunjukkan keahlian dalam fotografi dan desain logo. Dari momen-momen pribadi yang berharga hingga representasi visual dari nilai-nilai perusahaan, saya berkomitmen untuk memberikan hasil yang memuaskan dan mengesankan.
				  <br />
				  <br />
				  Saya percaya bahwa setiap proyek adalah kesempatan untuk mengekspresikan kreativitas dan kemampuan saya. Jelajahi portofolio saya dan temukan bagaimana saya dapat membantu Anda menangkap momen berharga atau mengembangkan identitas visual yang unik untuk bisnis Anda.
				  <br />
				  <br />
				  Terima kasih atas kunjungan Anda dan kesempatan untuk berkolaborasi. Saya sangat antusias untuk bekerja sama dalam proyek berikutnya.
				  <br />
				  <br />
				  Salam,
				  <br />
				  Faris Helmi Permana
				  <br />
				  <Link href="/contact" className="">kontak saya</Link>
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;