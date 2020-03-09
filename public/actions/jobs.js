// PRUEBA FINAL ->
const base_url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';

let form = document.getElementById('search_jobs');

$(function () {
    var selected = $('#tipoBusqueda').find(":selected").text();

    $('#tipoBusqueda').on('change', function () {
        let id = $(this).children(":selected").attr("id");
        if (id == 1) {
            $('#porDescripcion').show();
            $('#porLugar').hide();
            $('#porCoordenadas').hide();
        } else if (id == 2) {
            $('#porLugar').show();
            $('#porDescripcion').hide();
            $('#porCoordenadas').hide();
        } else if (id == 3) {
            $('#porCoordenadas').show();
            $('#porDescripcion').hide();
            $('#porLugar').hide();
        }
    });

});



form.addEventListener('submit', function (event) {
    event.preventDefault()

    console.log("entro aqui");

    $("#results").empty();
   

    const description = document.querySelector('#description').value;
    const location = document.querySelector('#location').value;
    const lat = document.querySelector('#lat').value;
    const long = document.querySelector('#long').value;
    let full_time;

    console.log("la descripcion es-- " + description);


    if ($("#si").is(':checked')) {
        full_time = true;
    } else {
        full_time = false;
    }


    console.log(full_time);

    const data = {
        description,
        location,
        lat,
        long,
        full_time
    };
    obtieneJobs(data);


})

const obtieneJobs = async (data) => {
    try {

        const resp = await axios.get(base_url, {
            params: {
                description: data.description,
                location: data.location,
                lat: data.lat,
                long: data.long,
                full_time: data.full_time
            }
        })
        if (resp.data) {
            /*$("#results").append("<h2>Resultados de b&uacute;squeda</h2>");
            $("#results").append("<br/>");
            $("#results").append("<br/>");*/


            $.each(resp.data, function (index, value) {
                let resultados =
                    '<div class="col-md-4 pb-4">' +


                    '<div class="d-flex flex-row border rounded carta-style">'+
                        '<div class="p-0 w-25 align-self-center">'+
                            '<img src="'+value.company_logo+'" alt="Imagen no disponible" class="img-thumbnail border-0" />'+

                        '</div>'+
                        '<div class="pl-3 pt-2 pr-2 pb-2 w-75 border-left">'+
                            '<h4 class="text-primary">'+value.title+'</h4>'+
                            '<h5 class="text-info">'+value.company+'</h5>'+
                            '<ul class="m-0 color-li" style="list-style: none; margin:0; padding: 0">'+
                                '<li><i class="fas fa-map-marker-alt"></i> '+value.location+'</li>'+
                                '<li><i class="fab fa-twitter-square"></i> Twitter</li>'+
                            '</ul>'+
                            '<p class="text-right m-0"><!--<a href="#" class="btn btn-primary"><i class="far fa-user"></i> View Profile</a>--></p>'+
                        '</div>'+
                    '</div>'+



                    '</div>';



                $("#results").append(resultados);
                $("#description").val("");
                $("#location").val("");
                $("#lat").val("");
                $("#long").val("");
            });

        }
    } catch (e) {
        console.error(e);
    }
}
