import '../styles/globals.css'
import PortfolioLayout from '../layouts/portfolioLayout';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const { pathname } = useRouter();
  if (pathname.toLowerCase().startsWith("/portfolio")){
    return (
      <PortfolioLayout>
        <Component {...pageProps} />
      </PortfolioLayout>
    )
  }else{
    return <Component {...pageProps} />
  }
  ;
}
