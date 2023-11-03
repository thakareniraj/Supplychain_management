import "../styles/globals.css";
import { NavBar,Footer } from "../Components";
import { TrackingProvider } from "../Conetxt/TrackingContext.js";
export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </TrackingProvider>
    </>
  );
}