import styles from "./styles.module.scss";
import Logo_Branco from "../../assets/imgs/Logos/logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo_Cadastur from "../../assets/imgs/Logos/logo_cadastur.png";
import qr_code from "../../assets/imgs/Diversos/qr_code_cadastur.jpg";

export const Footer = () => {
  return (
    <footer className={styles.footer + " container"}>
      <div className={styles.linksContainer}>
        <div className={styles.coluna_footer}>
          <img src={Logo_Branco} className={styles.logo} />
        </div>
        <div className={styles.coluna_footer}>
          <h2 className={styles.titulo_footer}>Navegue</h2>
          <ul className={styles.links_footer}>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Viagens Internacionais</a>
            </li>
            <li>
              <a href="/">Viagens Nacionais</a>
            </li>
            <li>
              <a href="/">Por que a Trip For Me</a>
            </li>
            <li>
              <a href="/">Viagem do Seu Jeito</a>
            </li>
          </ul>
        </div>
        <div className={styles.coluna_footer}>
          <h2 className={styles.titulo_footer}>Contato</h2>
          <ul>
            <li className={styles.footer_li_contato}>
              <FontAwesomeIcon icon={faWhatsapp} />
              <a href="">(43) 98873-2858</a>
            </li>
            <li className={styles.footer_li_contato}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contato@tripforme.com.br">
                contato@tripforme.com.br
              </a>
            </li>
            <li className={styles.footer_li_contato}>
              <FontAwesomeIcon icon={faMapLocationDot} />
              <a href="/" target="_blank" rel="noopener noreferrer">
                Av. Des. Lima e Castro, 337 Niterói - RJ 24120-350 - Brasil
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.coluna_footer}>
          <img src={Logo_Cadastur} />
          <div className={styles.div_qrcode}>
            <img src={qr_code}/>
            <p>Escaneie o QR Code ao lado para acessar nossas credenciais.</p>
          </div>
        </div>
      </div>
      <div className={styles.info_legal}>
        <p>© 2024 Triply. Todos os Direitos Reservados</p>
      </div>
    </footer>
  );
};
