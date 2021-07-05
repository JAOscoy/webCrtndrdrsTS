import Summary from "../../components/summary/summary";
import content from "../../common/data";


const Home = () => {
  return (
    <div>
      <Summary summaryData= {content.summaryData}/>
    </div>  
  );
};

export default Home;
