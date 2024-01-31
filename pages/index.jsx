import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { GiChessKing } from "react-icons/gi";

function Home() {
  return <>
    <Head>
      <title>Home</title>
    </Head>

    <Navbar />

    <section className="hero">
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">Halo, saya Faris Helmi Permana</h1>
          <p className="description">Saya seorang fotografer dan desainer logo.</p>

          <Link href="/contact" className="cta">Kontak Saya</Link>
        </div>

        <div className="image-wrapper">
          <GiChessKing size={300}/>
        </div>
      </div>
    </section>
  </>;
}

export default Home;