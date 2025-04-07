import styles from "./styles.module.scss";
import { useState } from "react";

export const Contato = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>
              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome completo" />
            </div>
            <div>
              <label>E-mail</label>
              <input type="email" placeholder="email@tripforme.com" />
            </div>
            <div className={styles.formulario_contato_home_dupla}>
              <div className={styles.formulario_contato_home_metade}>
                <label>Quantas Pessoas</label>
                <input type="text" placeholder="Ex: 3 pessoas" />
              </div>
              <div className={styles.formulario_contato_home_metade}>
                <label>Telefone</label>
                <input type="tel" placeholder="(99) 99999-9999" />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
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
                <input
                  type="text"
                  placeholder="ex.: Verão, Inverno, Primavera"
                />
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
          </>
        );
      case 3:
        return (
          <>
          <div className={styles.form_contato_opcoes}>
            <div className={styles.form_coluna}>
              <h3 className={styles.form_titulo_opcoes}>Hospedagem</h3>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Hotel 3 Estrelas
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Hotel 4 Estrelas
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Hotel 5 Estrelas
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Pousada
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                AirBnB
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Café da Manhã
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Piscina
              </label>
            </div>
            <div className={styles.form_coluna}>
              <h3 className={styles.form_titulo_opcoes}>Transporte</h3>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Vôo Econômico
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Vôo Executivo
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Vôo Primeira Classe
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Passagem Trem/Ônibus
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Carro 5 lugares
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Carro 7 lugares
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Van 9 lugares
              </label>
            </div>
            <div className={styles.form_coluna}>
              <h3 className={styles.form_titulo_opcoes}>Extras</h3>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Roteiro Personalizado
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Assessoria para documentação
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Seguro 
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Traslado
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Reserva de Passeios
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Ingressos de Atrações
              </label>
              <label className="label_opcoes">
                <input className="checkbox" type="checkbox" />
                Guia Turístico
              </label>
            </div>
          </div>
          </>
        );
      default:
        return null;
    }
  };
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
        <div className={styles.passos_navegacao}>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              type="button"
              className={`${styles.botao_passo} ${
                step === num ? styles.ativo : ""
              }`}
              onClick={() => setStep(num)}
            >
              {num}
            </div>
          ))}
        </div>
        {renderStep()}
        <div className={styles.botoes_navegacao}>
          {step === 1 && (
            <button
              type="button"
              className="button_form_full"
              onClick={nextStep}
            >
              Próximo
            </button>
          )}
          {step === 2 && (
            <>
              <div className="botoes_navegacao_dupla">
                <button
                  type="button"
                  className="button_form_metade"
                  onClick={prevStep}
                >
                  Voltar
                </button>
                <button
                  type="button"
                  className="button_form_metade"
                  onClick={nextStep}
                >
                  Próximo
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <div className="botoes_navegacao_dupla">
            <button
              type="button"
              className="button_form_metade"
              onClick={prevStep}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="button_form_metade"
            >
              Enviar
            </button>
          </div>
          )}
        </div>
      </form>
    </section>
  );
};
