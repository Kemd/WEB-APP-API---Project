
function handleGetData() {

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            // console.log(data)
            $('div').append(`<h1> Gender: ${data["results"][0]["gender"]}</h1>`)
        }
    })
}