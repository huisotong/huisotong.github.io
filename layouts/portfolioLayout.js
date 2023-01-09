import PortfolioNavBar from "../components/navBar/portfolioNavBar";

const PortfolioLayout = ({ children }) => {
    return (  
        <div className="content">
            <PortfolioNavBar/>
            {children}

        </div>
    );
}
 
export default PortfolioLayout;