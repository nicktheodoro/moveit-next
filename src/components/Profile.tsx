import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/nicktheodoro.png" alt="Nicolas Thedoro" />
      <div>
        <strong>Nicolas Theodoro</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 100
        </p>
      </div>
    </div>
  )
}