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
    //name data
    $('#name').text(`Name: ${incData['results'][0]['name']['title']} ${incData['results'][0]['name']['first']} ${incData['results'][0]['name']['last']}`)

    // gender data
    $('#gender').text('Gender: ' + incData['results'][0]['gender'])

    // location data
    $('#location').text(`Location: ${incData['results'][0]['location']['state']}, ${incData['results'][0]['location']['country']}`)

    // image data
    $('.flex-2').append(`<img src='${incData['results'][0]['picture']['large']}' />`)

    // age data
    $('#age').text(`Age: ${incData['results'][0]['dob']['age']} years old!`)
}

// function enterVoid () {
//     const body = $('body')
//     body.css({
//         'background': "url(https://mymodernmet.com/wp/wp-content/uploads/2014/02/3d-gifs-3.gif)",
//         'background-repeat': 'no-repeat'
//     })
// }