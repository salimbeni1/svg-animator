import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          <title> SVG animation generator </title>
          
          <meta name="description" content="web app to create svg animations"/>

          <meta name="keywords" content="svg , svg animation"/>
          <meta name="author" content="Etienne Salimbeni , Samuel Liebana"/>

          <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}