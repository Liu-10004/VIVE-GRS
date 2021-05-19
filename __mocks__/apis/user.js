
module.exports = (router) => {
  router.get('/schools/user_id/8865/latest', (req, res) => {
    res.send({
      data: {
        content: fakeSchool(),
      },
    })
  })
}
