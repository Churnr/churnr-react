import "bootstrap/dist/css/bootstrap.min.css";
import FrontPageHeader from "../../src/components/home/FrontPageHeader";
import MoneyRetained from "../../src/components/home/MoneyRetained";
import CallToAction from "../../src/components/global/CallToAction";

const Home = () => {
  return (
    <>
    <FrontPageHeader/>
    <MoneyRetained/>
    <CallToAction/>
    </>
    );
}



export default Home;