import styles from "./styles.module.scss";

export const Contato = () => {
  return (
    <section className={`${styles.contato_section} container`}>
      <div className="secao_titulo">
        <h1 className="secao_palavra">
          Contato
          <p className="secao_frase">
            Viagem do seu <span className="palavra_destaque">Jeito</span>
          </p>
        </h1>
        <p className="secao_heading">
          Crie sua viagem dos sonhos com destinos e datas escolhidos a dedo além
          preços exclusivos para você.
        </p>
      </div>

      <form className={styles.formulario_contato_home}>
        
        <div>
          <label>Destino</label>
          <input
            type="text"
            placeholder="Digite seu destino dos sonhos (ex.: Bali, Paris, Tóquio)"
          />
        </div>

        <div className={styles.formulario_contato_home_dupla}>
          <div className={styles.formulario_contato_home_metade}>
            <label>Seu Estilo de Viagem</label>
            <input type="text" placeholder="ex.: Aventura, Relaxamento" />
          </div>
          <div className={styles.formulario_contato_home_metade}>
            <label>Duração da Viagem</label>
            <input type="text" placeholder="3-5 Dias" />
          </div>
        </div>

        <div className={styles.formulario_contato_home_dupla}>
          <div className={styles.formulario_contato_home_metade}>
            <label>Estação de Viagem</label>
            <input type="text" placeholder="ex.: Verão, Inverno, Primavera" />
          </div>
          <div className={styles.formulario_contato_home_metade}>
            <label>Planeje Seu Orçamento</label>
            <input type="text" placeholder="(ex.: R$500 - R$5000)" />
          </div>
        </div>

        <div>
          <label>Informações Adicionais</label>
          <textarea placeholder="Digite aqui quaisquer notas ou preferências adicionais..." />
        </div>

        <button type="submit">Encontre Minha Viagem Perfeita</button>
      </form>
    </section>
  );
};
