import { API_KEY, BASE_URI } from './environtment'

export const transformData = (listData, positionList) => {
  const data = transformPlaceData(listData)

  const dataFilter = data.slice(0, positionList.length).map((item, index) => {
    return {
      ...item,
      topPosition: positionList[index].topPosition,
      leftPosition: positionList[index].leftPosition
    }
  })

  return dataFilter
}

export const transformDataStation = (listData, positionList) => {
  return listData.results.slice(0, positionList.length).map((item, index) => {
    return {
      ...item,
      topPosition: positionList[index].topPosition,
      leftPosition: positionList[index].leftPosition
    }
  })
}

export const transformPlaceData = (listData) => {
  return listData.results.filter((item) => {
    if (item.photos && item.opening_hours) {
      return item
    }
  })
}

export const getImagePlace = (photoReference) => {
  return `${BASE_URI}&photoreference=${photoReference}&key=${API_KEY}`
}

export const getTimePlace = (time) => {
  const jam = time.slice(0, 2)
  const menit = time.slice(2)

  return `${jam}:${menit}`
}
