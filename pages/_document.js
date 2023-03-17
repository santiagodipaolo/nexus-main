import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>

        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
          
          <meta
            name="title"
            content="Nexus"
          />
          <meta
            name="description"
            content="Recruit the best talent in LatAm."
          />
          <meta property="og:site_name" content="https://recruitment-eta.vercel.app" />
          <meta property="og:title" content="Nexus" />
          <meta
            property="og:description"
            content="Recruit the best talent in LatAm."
          />
          <meta name="twitter:card" content="Nexus" />
          <meta name="twitter:title" content="Nexus" />
          <meta
            name="twitter:description"
            content="Recruit the best talent in LatAm."
          />
          <meta
            property="og:image"
            content="https://recruitment-eta.vercel.app/Nexus-2.svg"
          />
          <meta
            name="twitter:image"
            content="https://recruitment-eta.vercel.app/Nexus-2.svg"
          />
          
          
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          ></script> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;