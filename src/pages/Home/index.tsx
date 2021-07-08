import Summary from "../../components/summary/index";
import Company from "../../components/company/index"
import content from "../../common/data";


const Home = () => {
  return (
    <div>
      <Summary summaryData= {content.summaryData}/>
      <Company companyData= {content.companyData}/>
    </div>  
  );
};

export default Home;
