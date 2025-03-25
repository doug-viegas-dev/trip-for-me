import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faMoneyBillTrendUp, faHeadset } from "@fortawesome/free-solid-svg-icons";
import img_diferenciais_1 from "../../../assets/imgs/Diferenciais/diferenciais_1.jpg";
import img_diferenciais_2 from "../../../assets/imgs/Diferenciais/diferenciais_2.jpg";
import img_diferenciais_3 from "../../../assets/imgs/Diferenciais/diferenciais_3.jpg";

export const Diferenciais = () => {
  <section className={`${styles.diferenciais_section} container`}>
    <div className="section_title">
      <h1 className="section_word">EXPERIÊNCIA</h1>
      <h2 className="section_phrase">Nossos Diferenciais</h2>
      <p className="section_heading">
        Na <strong>Trip For Me</strong> nós tornamos a sua viagem dos sonhos
        uma realidade com um serviço personalizado, ótimos custo benefício e
        uma experiência inesquecível.
      </p>
    </div>
    <div className={styles.diferenciais_grid}>
      <div className={styles.diferenciais_grid_item}>
        <div className={styles.diferenciais_grid_card}>
          <div className={styles.diferenciais_grid_icone}>
            <FontAwesomeIcon icon={faRoute} />
          </div>
          <h3 className={styles.diferenciais_grid_titulo}>
            Roteiros Feitos para Você
          </h3>
          <p className={styles.diferenciais_grid_descricao}>
            Criamos experiências feitas para do seu jeito, com dicas locais
            e detalhes únicos.
          </p>
        </div>
        <img
          src={img_diferenciais_1}
          className={styles.diferenciais_grid_imagem}
        />
      </div>
      <div className={styles.diferenciais_grid_item}>
        <img
          id="image-big"
          src={img_diferenciais_2}
          className={styles.diferenciais_grid_imagem}
        />
        <div className={styles.diferenciais_grid_card}>
          <div className={styles.diferenciais_grid_icone}>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          </div>
          <h3 className={styles.diferenciais_grid_titulo}>
            Seu Dinheiro Bem Gasto
          </h3>
          <p className={styles.diferenciais_grid_descricao}>
            Planejamos sua viagem otimizando hospedagens, transporte e
            experiências.
          </p>
        </div>
      </div>
      <div className={styles.diferenciais_grid_item}>
        <div className={styles.diferenciais_grid_card}>
          <div className={styles.diferenciais_grid_icone}>
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <h3 className={styles.diferenciais_grid_titulo}>Atendimento 24/7</h3>
          <p className={styles.diferenciais_grid_descricao}>
            Nosso atendimento não é feito com robôs e fica disponível 24h
            durante toda a sua viagem.
          </p>
        </div>
        <img
          src={img_diferenciais_3}
          className={styles.diferenciais_grid_imagem}
        />
      </div>
    </div>
  </section>
};
