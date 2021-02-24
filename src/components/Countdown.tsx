import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout; // retorna o tipo do setTimeout

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60); // determina a quantidades de minutos do contador
  const [isActive, setIsActive] = useState(false); // determina se o estado do contador está parado(false) ou ativo(true)
  const [hasFineshed, setHasFinished] = useState(false); // determina se o contador finalizou(true) a contagem ou não(false)

  const minutes = Math.floor(time / 60); // retira apenas o minuto e ignora os segundos
  const seconds = time % 60; // o resto da divisão são os minutos

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // pad start add um 0 a esquerda quando minute tem apenas uma casa (padão duas casas)
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // split sem parametro divide cada carctere num array

  function startCountdown() {
    setIsActive(true); // muda o estado do contador para ativo(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout); // Limpa a váriavel pra impedir que o countdown tenha o delay de 1s após a parada do contador e possibilita zerar o contador tbm
    setIsActive(false); // Pausa o contador
    setTime(0.1 * 60);
  }

  // sintaxe do contdown
  useEffect(() => { //configura as mudanças de estados disparados no botão com a função startCountdown
    if (isActive && time > 0) { //  && = and
      countdownTimeout = setTimeout(() => { // assina o valor do setTimeout para a váriavel global
        setTime(time - 1); // diminui 1s do tempo total
      }, 1000) //dispara a função a cada 1s
    } else if (isActive && time === 0) { // verifica se o contador está ativo e time = 0 pra sabermos que finalizou a contagem
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]) //dispara todas vez que o estado do contador mudar active(true) ou quando o tempo mudar (fazendo o contador continuar rodando)

  return (
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFineshed ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
        >
          Ciclo encerrado
          <img src="icons/check-icon.png" alt="Checado"/>
        </button>
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>
              )
            }
          </>
        )
      }
    </div>
  );
}