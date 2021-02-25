import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string,
  amount: number,
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;  // função que não tem retorno
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completedChallenge: () => void;
}

interface challengesProviderProps {
  children: ReactNode // aceita qualquer elemento filho como children, no caso um outro componente
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children } : challengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission()
  }, []) // toda vez que um array vazio é passado como parametro quer dizer que o useEffect só vai rodar uma única vez quando for exibido em tela

  // Calculo baseado em jogos de rpg para fazer com que a xp necessária para o próximo nivel auemte progressivamente
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2) 

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);
    
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('NOVO DESAFIO', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    } 

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completedChallenge,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
