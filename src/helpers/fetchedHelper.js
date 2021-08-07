const fetchedHelper = (data) => {
  const histories = () => {
    if (Array.isArray(data.histories)) return data.histories.map((history) => ({ value: history }))
    if (typeof data.histories === 'string') return [data.histories]
    else return []
  }

  return {
    ...data,
    histories: histories()
  }

}

export default fetchedHelper
