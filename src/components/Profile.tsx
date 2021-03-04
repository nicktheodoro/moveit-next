import styles from '../styles/components/Profile.module.css';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

interface IUserGithub {
  name: string
  avatar_url: string
}

interface ProfileData {
  user: IUserGithub
}

export function Profile({ user }: ProfileData) {
  const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt={`name: ${user.name}`}/>
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}