let giveAwayList = require('./giveAwayList.json')
let giveAwayModel = require('./user')

giveAwayList.forEach(async (provider) => {
    console.log('Creating giveAway:', provider.providerName)
    let createdId = await giveAwayModel.createUser(provider)
    console.log('... created with id', createdId)
})

