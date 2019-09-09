const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://us17.api.mailchimp.com/3.0/lists/ffb28d9f75/members'
const successText = $('.register__success')
const errorText = $('.register__error')

$('#email_form').submit(function(event){
    event.preventDefault()
    let formValue = $(this).serialize().replace(/\=/g, '":"').replace('%40', '@') + '"'
    let data = '{' + '"' + formValue + ', "status": "subscribed"}'
    $.ajax({
        type: 'POST',
        url: proxyUrl + url,
        contentType: 'application/json',
        headers: {
            'Authorization': 'Basic ' + btoa('brushild' + ':' + '2c0cb436b295dd548eccdd794e29decf-us17')
        },
        data: data,
        statusCode: {
            200: function() {
                errorText.html('')
                successText.html('Vous êtes enregistré !')
            },
            400: function() {
                successText.html('')
                errorText.html('Entrez une adresse email valide')
            } 
        }
    })
})