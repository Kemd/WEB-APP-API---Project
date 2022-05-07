// VARIABLES
let incData;

function handleGetData() {

    $.ajax({
        url: 'https://randomuser.me/api/', // API
        dataType: 'json', // returned data
        success: function(data) {
            // console.log(data)
            // $('div').append(`<h1> Gender: ${data["results"][0]["gender"]}</h1>`)
            incData = data
            apiData()
        },
        error: function(error) {
            console.log('something went wrong', error)
        }
    })
}

//button
$('#random').on('click', handleGetData)

//function that handle all the incoming data from the API
const apiData = () => {
    $('div').append(`<h1> Gender: ${incData['results'][0]['gender']}</h1>`)
}