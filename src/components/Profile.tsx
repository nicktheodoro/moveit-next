import styles from '../styles/components/Profile.module.css';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/nicktheodoro.png" alt="Nicolas Thedoro" />
      <div>
        <strong>Nicolas Theodoro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          {level}
        </p>
      </div>
    </div>
  );
}