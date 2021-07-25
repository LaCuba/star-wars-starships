import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestStarships } from "../../redux/actions/starships"
import styles from "./Main.module.scss"
import Starship from "./Starship/Starship"
import * as selector from "./../../redux/selectors/selectors"

const Main = () => {
  const starships = useSelector(selector.starships.starshipsSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestStarships())
  }, [])

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.title}>STAR WARS</div>
      </header>
      <div className={styles.main}>
        {starships.map((starship) => (
          <Starship
            key={starship.model}
            name={starship.name}
            model={starship.model}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
