import React from "react"
import { FC } from "react"
import styles from "./Starship.module.scss"
import BTLYwing from "./../../../common/starships/BTL-Y-wing.png"
import EF76NebulonBescortfrigate from "./../../../common/starships/EF76-Nebulon-B-escort-frigate.jpeg"
import Executorclassstardreadnought from "./../../../common/starships/Executor-class-star-dreadnought.png"
import Firespray31classpatrolandattack from "./../../../common/starships/Firespray-31-class-patrol-and-attack.png"
import GR75mediumtransport from "./../../../common/starships/GR-75-medium-transport.png"
import ImperialIclassStarDestroyer from "./../../../common/starships/Imperial-I-class-Star-Destroyer.png"
import LambdaclassT4ashuttle from "./../../../common/starships/Lambda-class-T-4a-shuttle.png"
import T65Xwing from "./../../../common/starships/T-65-X-wing.png"
import YT1300lightfreighter from "./../../../common/starships/YT-1300-light-freighter.jpeg"

export type StarshipProps = {
  name: string
  model: string
}

const starshipsImg: Record<string, string> = {
  "BTL Y-wing": BTLYwing,
  "EF76 Nebulon-B escort frigate": EF76NebulonBescortfrigate,
  "Executor-class star dreadnought": Executorclassstardreadnought,
  "Firespray-31-class patrol and attack": Firespray31classpatrolandattack,
  "GR-75 medium transport": GR75mediumtransport,
  "Imperial I-class Star Destroyer": ImperialIclassStarDestroyer,
  "Lambda-class T-4a shuttle": LambdaclassT4ashuttle,
  "T-65 X-wing": T65Xwing,
  "YT-1300 light freighter": YT1300lightfreighter,
}

const Starship = ({ name, model }: StarshipProps) => {
  const imageSrc = starshipsImg[model]

  return (
    <div className={styles.body}>
      <div className={styles.image}>
        {imageSrc && (
          <img className={styles.imageStarship} src={imageSrc} alt="" />
        )}
      </div>
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
