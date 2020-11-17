function addEmployee(event){
    window.event.preventDefault()
    $.post({
        traditional: true,
        url: 'http://localhost:9000/',
        contentType: 'application/json',
        data: JSON.stringify( {
            name: $('#name-input').val(),
            city: $('#city-input').val()
        } ),
        dataType: 'json'
    }).done(function(req){
        $('#data').empty()
        JSON.parse(JSON.stringify(req)).forEach(element => {
            $('#data').append(`<p>${element.name} , ${element.city}</p>`)
        })
    })
}