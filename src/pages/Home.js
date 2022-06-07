import "bootstrap/dist/css/bootstrap.min.css";
import FrontPageHeader from "../../src/components/home/FrontPageHeader";
import Customers from "../../src/components/home/Customers";
import Problem from "../../src/components/home/Problem";
import MoneyRetained from "../../src/components/home/MoneyRetained";
import How from "../../src/components/home/How";
import Dashboard from "../../src/components/home/Dashboard";
import Pricing from "../../src/components/home/Pricing";
import Team from "../../src/components/home/Team";
import CallToAction from "../../src/components/global/CallToAction";

const Home = () => {
  return (
    <>
    <FrontPageHeader/>
    <Customers/>
    <Problem/>
    <MoneyRetained/>
    <How/>
    <Dashboard/>
    <Pricing/>
    <Team/>
    <CallToAction/>
    </>
    );
}



export default Home;