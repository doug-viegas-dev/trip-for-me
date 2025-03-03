import styles from "./styles.module.scss";
import Logo_White from "../../assets/Logos/logo_white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Header = () => {
    return (
      <header>
        <div className={styles.logo}>
          <img src={Logo_White} alt="Logo Trip For Me Branco" />
        </div>
        <nav className={styles.nav_links}>
          <ul className={styles.nav_list}>
            <li><a href="">Início</a></li>
            <li><a href="">Viagens Internacionais</a></li>
            <li><a href="">Viagens Nacionais</a></li>
            <li><a href="">Por que a Trip For Me</a></li>
          </ul>
        </nav>
        <ul className={styles.social_list}>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
        <button className={styles.bt_personalizar}>
          <a> Viagem do Seu Jeito </a>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </header>
    );
};

