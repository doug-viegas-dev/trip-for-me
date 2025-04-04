import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarrosselFamosos from "../../Carrosséis/CarrosselFamosos";

export const Famosos = () => (
  <section className={`${styles.carrossel_section} container`}>
    <div className="secao_titulo">
      <h1 className="secao_palavra">
        Famosos
        <p className="secao_frase">Destinos Em <span className="palavra_destaque">Destaque</span></p>
      </h1>

      <p className="secao_heading">
        Experiências planejadas nos mínimos detalhes para você conhecer os
        destinos mais famosos, inspiradores e deslumbrantes do mundo.
      </p>
      <button className="hover-button">
        <span className="text">ACESSAR TODOS OS PACOTES</span>
        <span className="icon">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
    <CarrosselFamosos />
  </section>
);
