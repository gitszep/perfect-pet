import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider4 from '../components/Slider4';
import { SliderData } from '../components/SliderData';
import Footer from '../components/Footer';
import Tekst from '../components/Tekst';
import Link from 'next/link';

export default function Home({ heading, message }) {
  return (
    <div>
      <Head>
        <title>Perfect Pet</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/negro.webp' />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='relative'>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />
        <div className='p-5 text-white z-[2]'>
          <h2 className='text-5xl font-bold'></h2>
          <p className='py-5 text-3xl'></p>
        </div>
      </div>
      <h1 className="text-4xl text-white text-center font-bold mt-10 mb-10 hover:text-blue-400">
        Studio pielęgnacji zwierząt
      </h1>

      <div className='flex justify-center'>
        <img src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>

      <div className='font-sarif'>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400">Zapraszamy</h1>
        <h1 className="text-3xl text-center font-bold mt-10">Profesjonalne studio pielęgnacji zwierząt</h1>
        <h1 className="text-3xl text-center font-bold mt">Modne strzyżenie pupili domowych</h1>
        <h1 className="text-3xl text-center font-bold mt">Kąpiel i pielęgnacja</h1>
        <h1 className="text-3xl text-center font-bold mt">ul.Kubiny 108 Częstochowa</h1>
        <h1 className="text-3xl font-raleway text-center font-bold">+48-602-302-140</h1>
        <h1 className="text-3xl text-center font-bold">Email: perfectpet@onet.pl</h1>
        <div className="flex justify-center items-center mt-2">
        </div>
      </div>
      <Slider4/>
      <div className='mt-25'>
        <div className='flex justify-center mt-10 mb-10'>
          <img src="negro.webp" className='photostyle2' alt="Negro4" />
        </div>
        <div className="flex justify-center items-center mt-2 mb-10">
          <Link href="/contact">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
              Napisz do nas
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
