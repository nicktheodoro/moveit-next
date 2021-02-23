import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60); // determina a quantidades de minutos do contador
  const [active, setActive] = useState(false); // determina se o estado do contador está parado(false) ou ativo(true)

  const minutes = Math.floor(time / 60); // retira apenas o minuto e ignora os segundos
  const seconds = time % 60; // o resto da divisão são os minutos

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // pad start add um 0 a esquerda quando minute tem apenas uma casa (padão duas casas)
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split(''); // split sem parametro divide cada carctere num array

  function startCountdown() {
    setActive(true); // muda o estado do contador para ativo(true)
  }

  // sintaxe do contdown
  useEffect(() => { //configura as mudanças de estados disparados no botão com a função startCountdown
    if (active && time > 0) { //  && = and
      setTimeout(() => {
        setTime(time - 1); // diminui 1s do tempo total
      }, 1000) //dispara a função a cada 1s
    }
  }, [active, time]) //dispara todas vez que o estado do contador mudar active(true) ou quando o tempo mudar (fazendo o contador continuar rodando)

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

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}