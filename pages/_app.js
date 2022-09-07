import '../styles/globals.css'
import NavBar from '../components/navbar.js';
import Footer from '../components/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
  </div>
}

export default MyApp
