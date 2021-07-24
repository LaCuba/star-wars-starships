import React from "react"
import styles from "./Main.module.scss"
import Starship from "./Starship/Starship"

const Main = () => {
  return (
    <div className={styles.body}>
      <header>STAR WARS</header>
      <div className={styles.main}>
        <Starship />
      </div>
    </div>
  )
}

export default Main
