import {
  faArrowRight,
  faHeadset,
  faMoneyBillTrendUp,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import img_highlight_1 from "../../assets/imgs/Highlights/highlights_1.jpg";
import img_highlight_2 from "../../assets/imgs/Highlights/highlights_2.jpg";
import img_highlight_3 from "../../assets/imgs/Highlights/highlights_3.jpg";

export const Home = () => {
  return (
    <>
      <section className={`${styles.top_section} ${styles.container}`}>
        <p className={styles.home_slogan}>
          Descubra, explore e viva a sua próxima grande
        </p>
        <strong>AVENTURA</strong>
      </section>

      <section className={`${styles.highlights_section} container`}>
        <div className="section_title">
          <h1 className="section_word">EXPERIÊNCIA</h1>
          <h2 className="section_phrase">Nossos Diferenciais</h2>
          <p className="section_heading">
            Na <strong>Trip For Me</strong> nós tornamos a sua viagem dos sonhos
            uma realidade com um serviço personalizado, ótimos custo benefício e
            uma experiência inesquecível.
          </p>
        </div>
        <div className={styles.highlights_grid}>
          <div className={styles.highlights_grid_item}>
            <div className={styles.highlights_grid_card}>
              <div className={styles.highlights_grid_icon}>
                <FontAwesomeIcon icon={faRoute} />
              </div>
              <h3 className={styles.highlights_grid_title}>
                Roteiros Feitos para Você
              </h3>
              <p className={styles.highlights_grid_description}>
                Criamos experiências feitas para do seu jeito, com dicas locais
                e detalhes únicos.
              </p>
            </div>
            <img
              src={img_highlight_1}
              className={styles.highlights_grid_image}
            />
          </div>
          <div className={styles.highlights_grid_item}>
            <img
              id="image-big"
              src={img_highlight_2}
              className={styles.highlights_grid_image}
            />
            <div className={styles.highlights_grid_card}>
              <div className={styles.highlights_grid_icon}>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              </div>
              <h3 className={styles.highlights_grid_title}>
                Seu Dinheiro Bem Gasto
              </h3>
              <p className={styles.highlights_grid_description}>
                Planejamos sua viagem otimizando hospedagens, transporte e
                experiências.
              </p>
            </div>
          </div>
          <div className={styles.highlights_grid_item}>
            <div className={styles.highlights_grid_card}>
              <div className={styles.highlights_grid_icon}>
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3 className={styles.highlights_grid_title}>Atendimento 24/7</h3>
              <p className={styles.highlights_grid_description}>
                Nosso atendimento não é feito com robôs e fica disponível 24h
                durante toda a sua viagem.
              </p>
            </div>
            <img
              src={img_highlight_3}
              className={styles.highlights_grid_image}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.iconics_section} container`}>
        <div className="section_title">
          <h1 className="section_word">FAMOSOS</h1>
          <p className="section_phrase">Destinos em Destaque</p>
          <p className="section_heading">
            Experiências planejadas nos mínimos detalhes para você conhecer os
            destinos mais famosos, inspiradores e deslumbrantes do mundo.
          </p>
        </div>
        <div className={styles.iconics_grid}>
          <div className={styles.iconics_grid_column}>
            <div
              id={styles.iconics_paris_london}
              className={styles.iconics_grid_card_one}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>Paris e Londres</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              id={styles.iconics_buenos_aires}
              className={styles.iconics_grid_card_two}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>Buenos Aires</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className={styles.iconics_grid_column}>
            <div
              id={styles.iconics_san_andres}
              className={styles.iconics_grid_card_two}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>San Andres, Caribe</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              id={styles.iconics_atacama}
              className={styles.iconics_grid_card_one}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>Atacama, Chile</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className={styles.iconics_grid_column}>
            <div
              id={styles.iconics_portugal}
              className={styles.iconics_grid_card_one}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>Portugal</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div
              id={styles.iconics_italia}
              className={styles.iconics_grid_card_two}
            >
              <div className={styles.iconics_grid_icon}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>

              <h3 className={styles.iconics_grid_title}>Itália</h3>
              <p className={styles.iconics_grid_description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
