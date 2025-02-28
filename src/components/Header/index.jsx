import styles from "./styles.module.scss";
export const Header = () => {
    return (
        <header>
  <div className={styles.logo}>
    <img src="" alt="Logo" />
  </div>
  <nav className={styles.nav_links}>
    <ul className={styles.nav_list}>
      <li><a href="">Início</a></li>
      <li><a href="">Viagens Internacionais</a></li>
      <li><a href="">Viagens Nacionais</a></li>
      <li><a href="">Por que a Trip For Me</a></li>
    </ul>
  </nav>
  <button className={styles.bt_personalizar}>
    <a> Viagem do Seu Jeito </a>
    <div>
      <i></i>
    </div>
  </button>
</header>
    );
};

