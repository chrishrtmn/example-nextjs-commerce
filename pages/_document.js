import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Primary Meta Tags */}
          <meta name='title' content='Allday' />
          <meta name='description' content='Sofas from Allday' />

          {/* Favicons */}
          <link rel='icon' href='/favicons/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/favicons/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/favicons/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/favicons/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/favicons/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicons/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicons/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicons/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicons/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicons/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicons/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicons/ms-icon-144x144.png'
          />
          <meta name='theme-color' content='#ffffff' />

          {/* Fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Bungee&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
