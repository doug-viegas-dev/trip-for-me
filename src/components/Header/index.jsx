import styles from "./styles.module.scss";
import Logo_Branco from "../../assets/imgs/Logos/logo_white.png";
import Logo_Padrao from "../../assets/imgs/Logos/logo_padrao.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.8) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <header className={`container ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
        <img src={scrolled ? Logo_Padrao : Logo_Branco} alt="Logo Trip For Me" />
        </div>
        <nav className={`${styles.nav_links} ${scrolled ? styles.nav_links_scrolled : ''}`}>
          <ul className={`${styles.nav_list} ${scrolled ? styles.nav_list_scrolled : ''}`}>
            <li><a href="/">Início</a></li>
            <li><a href="">Viagens Internacionais</a></li>
            <li><a href="">Viagens Nacionais</a></li>
            <li><a href="">Por que a Trip For Me</a></li>
          </ul>
        </nav>
        <ul className={`${styles.social_list} ${scrolled ? styles.social_list_scrolled : ''}`}>
          <li>
            <a href="https://www.instagram.com/tripformee/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5543988732858&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20minha%20viagem%20com%20voc%C3%AAs!%20Vou%20passar%20as%20informa%C3%A7%C3%B5es%20aqui%20abaixo:" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="mailto:contato@tripforme.com.br" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
        <button className={`${styles.bt_personalizar} ${scrolled ? styles.bt_personalizar_scrolled : ''}`}>
          <a> Viagem do seu Jeito </a>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </header>
    );
};

