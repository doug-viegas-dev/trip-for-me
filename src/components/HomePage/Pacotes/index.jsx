import { useState} from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import pacotesInternacionais from '../../../data/pacotesInternacionais';

const PacotesViagem = () => {
  const [filtroEstacao, setFiltroEstacao] = useState('Todas');
  const [filtroContinente, setFiltroContinente] = useState('Todos');
  const [filtroPrecoMin, setFiltroPrecoMin] = useState(0);
  const [filtroPrecoMax, setFiltroPrecoMax] = useState(30000);

  const estacoes = ['Todas', 'Primavera', 'Verão', 'Outono', 'Inverno'];
  const continentes = ['Todos', 'Europa', 'América', 'Ásia', 'África', 'Oceania'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const pacotesFiltrados = pacotesInternacionais.filter(pacote => 
    (filtroEstacao === 'Todas' || pacote.estacao === filtroEstacao) &&
    (filtroContinente === 'Todos' || pacote.continente === filtroContinente) &&
    pacote.precoBase >= filtroPrecoMin &&
    pacote.precoBase <= filtroPrecoMax
  );

  return (
    <div className={styles.pacotesViagem}>
      <div className={styles.filtros}>
        <div>
          <label>Estação:</label>
          <select value={filtroEstacao} onChange={(e) => setFiltroEstacao(e.target.value)}>
            {estacoes.map(estacao => (
              <option key={estacao} value={estacao}>{estacao}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Continente:</label>
          <select value={filtroContinente} onChange={(e) => setFiltroContinente(e.target.value)}>
            {continentes.map(continente => (
              <option key={continente} value={continente}>{continente}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Preço Mínimo:</label>
          <input 
            type="range" 
            min="0" 
            max="30000" 
            value={filtroPrecoMin} 
            onChange={(e) => setFiltroPrecoMin(Number(e.target.value))}
          />
          <span>R$ {filtroPrecoMin}</span>
        </div>
        <div>
          <label>Preço Máximo:</label>
          <input 
            type="range" 
            min="0" 
            max="30000" 
            value={filtroPrecoMax} 
            onChange={(e) => setFiltroPrecoMax(Number(e.target.value))}
          />
          <span>R$ {filtroPrecoMax}</span>
        </div>
      </div>
      
      <Slider {...settings}>
        {pacotesFiltrados.map((pacote, index) => (
          <div key={index} className={styles.pacote}>
            <img src={pacote.imagem} alt={pacote.destino} className={styles.imagemPacote} />
            <div className={styles.conteudoPacote}>
              <h2>{pacote.destino}</h2>
              <div className={styles.avaliacao}>
                {pacote.avaliacao} <FontAwesomeIcon icon={faStar} />
              </div>
              <p>{pacote.fraseDestaque || `Explore ${pacote.destino} nesta incrível viagem!`}</p>
              <ul>
                {pacote.detalhes.slice(0, 3).map((detalhe, idx) => (
                  <li key={idx}>{detalhe}</li>
                ))}
              </ul>
              <p className={styles.preco}>A partir de R$ {pacote.precoBase.toLocaleString()}</p>
              <button className={styles.botaoReservar}>Reservar Agora</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PacotesViagem;
