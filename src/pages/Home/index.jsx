import { TopoHome } from "../../components/HomePage/TopoHome";
import { Diferenciais } from "../../components/HomePage/Diferenciais";
import { Famosos } from "../../components/HomePage/Famosos";

export const Home = () => {
  return (
    <>
      <TopoHome />
      <Diferenciais />
      <Famosos/>
    </>
  );
};
