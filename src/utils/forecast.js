const request = require('request')

const foreCast = (latitude,longitude,callback) => {

    const url = 'https://api.darksky.net/forecast/5edd219e2b98efe87a151d446953815d/'+latitude+','+longitude
    request({url, json:true},(error,{body}={})=>{
        if(error){
            callback('Unable to connect to weather Service',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary+' It is currently '+ body.currently.temperature +' derees. And there is a '+ body.currently.precipProbability +' % chance of rain' )
        }
    })

}

module.exports = foreCast