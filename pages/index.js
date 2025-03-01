import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageSection from "@/components/ImageSection";
import Work from "@/components/work";
import ContactSection from '@/components/contact'
import Footer from '@/components/footer'
import Script from 'next/script';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumit | Backend Developer</title>
        <meta name="description" content="Sumit's portfolio website showcasing his work, skills, and experience." />
        <meta property="og:title" content="Sumit | Backend Developer" />
        <meta property="og:description" content="Sumit's portfolio website showcasing his work, skills, and experience." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://sumit.com" />
        <meta property="og:site_name" content="Sumit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sumit | Backend Developer" />
        <meta name="twitter:description" content="Sumit's portfolio website showcasing his work, skills, and experience." />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@sumit" />
      </Head>
      <div>
        <Header/>
        <Hero/>
        <Work/>
        <About/>
        <ImageSection/>
        <Experience/>
        <ContactSection />
        <Footer/>
      </div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX" async />
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXX');
        `}
      </Script>
    </>
  );
}
