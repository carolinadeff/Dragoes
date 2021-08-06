const payloadHelper = (data) => ({
  ...data,
  histories: data.histories?.map((history) => history.value)
})

export default payloadHelper
