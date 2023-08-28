import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from '@/components/Link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SK Portfolio</title>


        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bb002b" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Sk portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-[#0F103F] pb-20">

        {/* Navbar section */}
        <Navbar />

        {/* Banner section */}
        <Banner />

        {/* About section */}
        <About />

        {/* Skill section */}
        <Skills />

        {/* Project section */}
        <Projects />

        {/* Contact section */}
        <Contact />

        {/* Social link section  */}
        <Link />

      </main>
    </div>
  )
}
