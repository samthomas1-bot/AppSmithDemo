export default {
  myFun1 () {
    GetCountry.run().then(dt => {
      showAlert("" + dt[0].country)
    })
    showAlert("HI");
  },

  async newFunc() {
    const country = await GetCountry.run()
    await showAlert("" + country[0].country)
    await showAlert("Hi")
  },

  async demoDependency() {
    let resp = await GetCountry.run()
    const country = resp[0].country
    let count = await GetUsersCountByCountry.run({ country })
    return count
  },
}