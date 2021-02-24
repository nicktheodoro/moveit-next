import { createContext, useState, ReactNode, useContext } from 'react';

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

  // Calculo baseado em jogos de rpg para fazer com que a xp necessária para o próximo nivel auemte progressivamente
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2) 

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
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
    }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}