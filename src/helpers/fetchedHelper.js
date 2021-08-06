const fetchedHelper = (data) => ({
  ...data,
  histories: data.histories?.map((history) => ({ value: history }))
})

export default fetchedHelper
