import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store';
import { Provider } from 'react-redux';
import '../extra.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import Router from 'next/router'

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>  
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )

}

export default MyApp;
