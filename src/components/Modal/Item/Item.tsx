import React from "react"
import { starshipsImg } from "../../Main/Starship/Starship"
import styles from "./Item.module.scss"

export type ItemProps = {
  minField?: string[]
  maxField?: string[]
  name: string
  model: string
  manufacturer: string
  costInCredits: string
  length: string
  maxAtmospheringSpeed: string
  crew: string
  passengers: string
  cargoCapacity: string
  consumables: string
  hyperdriveRating: string
  MGLT: string
  starshipClass: string
}

const Item = ({
  minField,
  maxField,
  name,
  model,
  manufacturer,
  costInCredits,
  length,
  maxAtmospheringSpeed,
  crew,
  passengers,
  cargoCapacity,
  consumables,
  hyperdriveRating,
  MGLT,
  starshipClass,
}: ItemProps) => {
  return (
    <div className={styles.starship}>
      <img src={starshipsImg[model]} alt="Image" className={styles.image} />
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{name}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{model}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{manufacturer}</h4>
      </div>
      <div
        className={styles.starshipValueContainer}
        style={
          minField?.includes("cost_in_credits")
            ? { backgroundColor: "green" }
            : maxField?.includes("cost_in_credits")
            ? { backgroundColor: "red" }
            : undefined
        }
      >
        <h4 className={styles.starshipValue}>{costInCredits}</h4>
      </div>
      <div
        className={styles.starshipValueContainer}
        style={
          minField?.includes("max_atmosphering_speed")
            ? { backgroundColor: "red" }
            : maxField?.includes("max_atmosphering_speed")
            ? { backgroundColor: "green" }
            : undefined
        }
      >
        <h4 className={styles.starshipValue}>{maxAtmospheringSpeed}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{length}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{crew}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{passengers}</h4>
      </div>
      <div
        className={styles.starshipValueContainer}
        style={
          minField?.includes("cargo_capacity")
            ? { backgroundColor: "red" }
            : maxField?.includes("cargo_capacity")
            ? { backgroundColor: "green" }
            : undefined
        }
      >
        <h4 className={styles.starshipValue}>{cargoCapacity}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{consumables}</h4>
      </div>
      <div
        className={styles.starshipValueContainer}
        style={
          minField?.includes("hyperdrive_rating")
            ? { backgroundColor: "red" }
            : maxField?.includes("hyperdrive_rating")
            ? { backgroundColor: "green" }
            : undefined
        }
      >
        <h4 className={styles.starshipValue}>{hyperdriveRating}</h4>
      </div>
      <div
        className={styles.starshipValueContainer}
        style={
          minField?.includes("MGLT")
            ? { backgroundColor: "red" }
            : maxField?.includes("MGLT")
            ? { backgroundColor: "green" }
            : undefined
        }
      >
        <h4 className={styles.starshipValue}>{MGLT}</h4>
      </div>
      <div className={styles.starshipValueContainer}>
        <h4 className={styles.starshipValue}>{starshipClass}</h4>
      </div>
    </div>
  )
}

export default Item
