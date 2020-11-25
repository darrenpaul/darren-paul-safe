import "../styles/globals.scss";
import Head from "next/head";
import Navigation from "./../components/navigation";
import Footer from "./../components/footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Darren Paul A Software Developer working as a Pipeline TD</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-00000000000000000000000000000000-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-00000000000000000000000000000000-1');`,
          }}
        />
        <link rel="shortcut icon" href="/images/branding_icon.svg" />
        <meta
          name="Description"
          content="Hey there, my name is Darren and I’m a Pipeline TD with 5 years VFX experience and 3 years developer experience. I started out as a character rigger, learned some python and instantly fell in love so decided to become a Pipeline TD."
        />
        <meta name="googlebot" content="index"></meta>
        <link rel="icon" type="image/png" href="/images/icon.ico" />

        {/* FACEBOOK */}
        <meta property="og:url" content="https://www.darrenpaul.net" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Darren Paul A Software Developer working as a Pipeline TD"
        />
        <meta
          property="og:description"
          content="Hey there, my name is Darren and I’m a Pipeline TD with 5 years VFX experience and 3 years developer experience. I started out as a character rigger, learned some python and instantly fell in love so decided to become a Pipeline TD."
        />
        <meta
          property="og:image"
          content="https://www.darrenpaul.net/images/profile_picture.jpg"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Darren Paul A Software Developer working as a Pipeline TD"
        />
        <meta
          name="twitter:description"
          content="Hey there, my name is Darren and I’m a Pipeline TD with 5 years VFX experience and 3 years developer experience. I started out as a character rigger, learned some python and instantly fell in love so decided to become a Pipeline TD."
        />
        <meta
          name="twitter:image"
          content="https://www.darrenpaul.net/images/profile_picture.jpg"
        />

        <meta
          name="Keywords"
          content="software developer, pipeline td, axis animation, photography"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default MyApp;
