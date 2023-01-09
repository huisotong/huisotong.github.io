import styles from "../../styles/components/navBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import navbarData from "./navBarData";

const PortfolioNavBar = () => {
  const { pathname } = useRouter();
  return (
    <>
      <div className={styles.main}>
        <div className={styles.navBar}>
          {/* className={
                    pathname === navbarData[index].link
                      ? styles.navBarTabActive
                      : styles.navBarTab
                  } */}
          {navbarData.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <Link href={navbarData[index].link} key={index}>
                <button className={styles.navBarTab}>
                  {navbarData[index].label}
                </button>
              </Link>
            );
          })}
        </div>
        <div className={styles.background}></div>
        <div className={styles.mainWrap}></div>
      </div>
    </>
  );
};

export default PortfolioNavBar;
