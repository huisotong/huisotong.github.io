import '../styles/globals.css'
import PortfolioLayout from '../layouts/portfolioLayout';

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <PortfolioLayout>
      <Component {...pageProps} />
    </PortfolioLayout>
  );
}
