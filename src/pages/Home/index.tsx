import Summary from "../../components/summary/index";
import Company from "../../components/company/index";
import Products from "../../components/products";
import Contact from "../../components/contact";
import content from "../../common/data";
import Header from "../../components/header_home/index"
//import SectionCarousel from "../../common/carrusel";

const Home = () => {
  return (
    <div>
      <Header />
      <Summary summaryData={content.summaryData} />
      <Company companyData={content.companyData} />
      <Products productData={content.productData} />
      <Contact value="supply" errorText={false} data={content.contactData} />
    </div>
  );
};

export default Home;
