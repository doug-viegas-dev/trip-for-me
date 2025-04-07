import { TopoHome } from "../../components/HomePage/TopoHome";
import { Diferenciais } from "../../components/HomePage/Diferenciais";
import { Famosos } from "../../components/HomePage/Famosos";
import { Depoimentos } from "../../components/HomePage/Depoimentos";
import { Contato } from "../../components/HomePage/Contato";
import { Footer } from "../../components/Footer";


export const Home = () => {
  return (
    <>
      <TopoHome />
      <Diferenciais />
      <Famosos />
      <Depoimentos/>
      <Contato/>
      <Footer/>
    </>
  );
};
