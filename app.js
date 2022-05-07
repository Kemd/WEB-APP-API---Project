
function handleGetData() {

    $.ajax({
        url: 'https://randomuser.me/api/', // API
        dataType: 'json', // returned data
        success: function(data) {
            // console.log(data)
            $('div').append(`<h1> Gender: ${data["results"][0]["gender"]}</h1>`)
        },
        error: function(error) {
            console.log('something went wrong', error)
        }
    })
}

//button
$('#random').on('click', handleGetData)