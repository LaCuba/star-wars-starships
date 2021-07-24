import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { requestStarships } from "../../redux/actions/starships"
import styles from "./Main.module.scss"
import Starship from "./Starship/Starship"

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestStarships())
  }, [])

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
