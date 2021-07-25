import React from "react"
import styles from "./Starship.module.scss"

export type StarshipProps = {
  name: string
  model: string
}

const Starship = ({ name, model }: StarshipProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.image}>Photo starship</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.model}>{model}</div>
      <div className={styles.isComparison}>
        <button className={styles.add}>Add</button>
        <button className={styles.remove}>Remove</button>
      </div>
    </div>
  )
}

export default Starship
