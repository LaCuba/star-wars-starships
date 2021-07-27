export const indexOfCompared = <T extends {}, K extends keyof T>(
  array: T[],
  prop: K
) => {
  let maxIndex = 0
  let minIndex = 0
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const currentN = Number(element[prop]) as any as number
    const prevMaxN = Number(array[maxIndex][prop]) as any as number
    const prevMinN = Number(array[minIndex][prop]) as any as number
    if (currentN > prevMaxN) {
      maxIndex = index
    }
    if (currentN < prevMinN) {
      minIndex = index
    }
  }
  return [minIndex, maxIndex] as const
}

export type Res = {
  [key: number]: string[]
}

export const minMaxIndexes = <T extends {}, K extends keyof T>(
  array: T[],
  prop: K[]
) => {
  if (array.length > 0 && prop.length > 0) {
    let resMin: Res = {}
    let resMax: Res = {}
    for (let i = 0; i < prop.length; i++) {
      const element = prop[i]
      let [min, max] = indexOfCompared(array, element)
      if (!resMin[min]) {
        resMin[min] = []
      }
      if (!resMax[max]) {
        resMax[max] = []
      }
      resMin[min].push(element as string)
      resMax[max].push(element as string)
    }
    return { min: resMin, max: resMax }
  }
  return
}
