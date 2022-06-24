import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp