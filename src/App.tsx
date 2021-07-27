import React from "react"
import Main from "./components/Main/Main"
import styles from "./App.module.scss"
import Modal from "./components/Modal/Modal"

const App = () => {
  return (
    <div className={styles.app}>
      <Main />
      <Modal />
    </div>
  )
}

export default App
