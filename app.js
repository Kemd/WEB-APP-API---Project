// VARIABLES
let incData;

function handleGetData(e) {
    // e.preventDefault()
    $.ajax({
        url: 'https://randomuser.me/api/', // API
        dataType: 'json', // returned data
        success: function(data) {
            console.log('Clear to go', data)
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
$('button').fadeOut(5000).fadeIn(2000).fadeOut(5000).fadeIn(2000)

//function that handle all the incoming data from the API
const apiData = () => {
    //name data
    $('#name').text(`Name: ${incData['results'][0]['name']['title']} ${incData['results'][0]['name']['first']} ${incData['results'][0]['name']['last']}`)

    // gender data
    $('#gender').text('Gender: ' + incData['results'][0]['gender'])

    // location data
    $('#location').text(`Location: ${incData['results'][0]['location']['state']}, ${incData['results'][0]['location']['country']}`)

    // timezone data
    $('#time-zone').text(`Timezone: ${incData['results'][0]['location']['timezone']['offset']}, ${incData['results'][0]['location']['timezone']['description']}`)

    // image data
    $('img').attr('src', incData['results'][0]['picture']['large'])
    $('#img-2').attr('src', incData['results'][0]['picture']['thumbnail'])

    // age data
    $('#age').text(`Age: ${incData['results'][0]['dob']['age']} years old!`)

    // birth data
    $('#dob').text(`D.O.B: ${incData['results'][0]['dob']['date']} `)

    // Phone data
    $('#phone').text(`Phone: ${incData['results'][0]['phone']}`)

    // Email data
    $('#email').text(`Email: ${incData['results'][0]['email']}`)

}

