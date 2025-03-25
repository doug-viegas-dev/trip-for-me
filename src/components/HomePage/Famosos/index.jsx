import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CarrosselFamosos from "../../Carrosséis/CarrosselFamosos";

export const Famosos = () => (
  <section className={`${styles.carrossel_section} container`}>
    <div className="section_title">
      <h1 className="section_word">FAMOSOS</h1>
      <p className="section_phrase">Destinos em Destaque</p>
      <p className="section_heading">
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