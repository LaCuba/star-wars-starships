import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Modal.module.scss"
import * as selector from "../../redux/selectors/selectors"
import { setIsComparison } from "../../redux/actions/starships"
import Item from "./Item/Item"
import { minMaxIndexes } from "../../helpers/comparison"

const Modal = () => {
  const dispatch = useDispatch()
  const isComparison = useSelector(selector.starships.isComparison)
  const starshipsFavorites = useSelector(selector.starships.starshipsFavorites)
  const starshipComparison = useSelector(selector.starships.starshipComparison)

  let result = minMaxIndexes(starshipsFavorites, starshipComparison)

  return (
    <>
      {isComparison && (
        <div
          className={isComparison ? styles.modalActive : styles.modal}
          onClick={() => {
            dispatch(setIsComparison(false))
          }}
        >
          <div className={styles.body} onClick={(e) => e.stopPropagation()}>
            <header className={styles.header}>
              <div className={styles.headerTitle}>Сравнение</div>
              <div
                className={styles.cancel}
                onClick={() => {
                  dispatch(setIsComparison(false))
                }}
              >
                X
              </div>
            </header>
            <div className={styles.starships}>
              <div className={styles.titles}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Фото</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Наименование</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Модель</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Производитель</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Стоимость</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Максимальная скорость</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Длина</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Экипаж</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Пассажиры</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Грузоподъемность</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Расходные материалы</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Рейтинг двигателя</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Мегалайты</h3>
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title}>Класс зведолета</h3>
                </div>
              </div>
              <div className={styles.container}>
                {starshipsFavorites.map((starship, index) => {
                  return (
                    <Item
                      key={index}
                      minField={result?.min[index]}
                      maxField={result?.max[index]}
                      name={starship.name}
                      model={starship.model}
                      manufacturer={starship.manufacturer}
                      costInCredits={starship.cost_in_credits}
                      length={starship.length}
                      maxAtmospheringSpeed={starship.max_atmosphering_speed}
                      crew={starship.crew}
                      passengers={starship.passengers}
                      cargoCapacity={starship.cargo_capacity}
                      consumables={starship.consumables}
                      hyperdriveRating={starship.hyperdrive_rating}
                      MGLT={starship.MGLT}
                      starshipClass={starship.starship_class}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
