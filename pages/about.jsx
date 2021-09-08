import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

//Need to fix the errors!

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className='hero'>
        <div className='container'>
          <div className='text-wrapper w-full'>
            <h1 className='title'>About Me</h1>
            <p className='description'>
              I am Victor Ejike Nwosu, I was born in Nigeria and i am currently
              living in Austria. Majored in Biology Science and worked with a
              (Silver-Line pharmaceutical) pharmaceutical company in my country.
              Relocated to Austria in 2015 and in 2017 i decided to change my
              career to digital marketing. Being into the field of digital
              marketing since 2017 have exposed me to using lots of softwares
              and applications that i began to wonder how all of these are made.
              Curiosity?, yeah i know. I am in a good way a very curious person
              and that is sometimes one of my motivation when i try to learn any
              new things. I became fully interested in web development and
              programming since last year. Coming from a none tech background i
              decided to join the Upleveled Full stack Web Development Bootcamp.
              [Going to Update this later along the line!].
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
