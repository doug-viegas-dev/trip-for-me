import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote_1 from "../../../assets/imgs/Depoimentos/quote_1.png";
import quote_2 from "../../../assets/imgs/Depoimentos/quote_2.png";

// Importando o array de depoimentos do arquivo correto
import depoimentos from "../../../data/depoimentos";

export const Depoimentos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
  };
  return (
    <section className={`${styles.depoimentos_section} container`}>
      <div className="secao_titulo">
        <h1 className="secao_palavra">
          Depoimentos
          <p className="secao_frase">
            O Que Nossos <span className="palavra_destaque">Viajantes</span>{" "}
            Dizem
          </p>
        </h1>
        <p className="secao_heading">
          Veja o que nossos clientes têm a dizer sobre as{" "}
          <strong>experiências</strong> incríveis que viveram com a TripForMe.
          Suas histórias inspiram nossas viagens!
        </p>
      </div>
      <div className={styles.div_depoimentos}>
        <Slider {...settings} className={styles.slider_depoimentos}>
          {depoimentos.map((depoimento) => (
            <div key={depoimento.id}>
              <div className={styles.depoimentoContainer}>
                <div className={styles.conteudo}>
                  <div className={styles.texto}>
                    <img src={quote_1} className={styles.quote_1} />
                    <p className={styles.testemunho}>
                      &quot;{depoimento.texto}&quot;
                    </p>
                    <img src={quote_2} className={styles.quote_2} />
                  </div>
                </div>
                <div className={styles.dados} style={{ backgroundImage:`url(${depoimento.fundo})`}}>
                  <div className={styles.img_circulo_externo}>
                    <div className={styles.img_circulo_interno}>
                      <img
                        src={depoimento.imagem}
                        alt={depoimento.nome}
                        className={styles.img_depoimento}
                      />
                    </div>
                  </div>

                  <h3 className={styles.nome}>{depoimento.nome}</h3>
                  <p className={styles.local}>{depoimento.local}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
