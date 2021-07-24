import React from "react"
import styles from "./Starship.module.scss"

const Starship = () => {
  return (
    <div className={styles.body}>
      <div className={styles.image}>Photo starship</div>
      <div className={styles.name}>Starship name</div>
      <div className={styles.model}>Starship model</div>
      <div className={styles.isComparison}>
        <button className={styles.add}>Add</button>
        <button className={styles.remove}>Remove</button>
      </div>
    </div>
  )
}

export default Starship
