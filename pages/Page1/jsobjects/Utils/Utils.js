export default {
	downloadDummy(){
		GetUsers100.run({ offset:0, limit:100 })
		showAlert("Dummy Function called")
	},
	GetCountryOptions(){		
		return GetCountry.data.map()(dt =>({
			name: dt.country,
			value: dt.country,
		}))
	}
}