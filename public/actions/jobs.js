// PRUEBA FINAL ->
const base_url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';

let form = document.getElementById('search_jobs');
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const description = document.querySelector('#description').value;
    const location = document.querySelector('#location').value;
    const lat = document.querySelector('#lat').value;
    const long = document.querySelector('#long').value;
    const full_time = document.querySelector('#full_time').value;

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
            //data exist
           // window.location.href = '/';
            $("#results").append("<h2>Resultados de b&uacute;squeda</h2>");
            $("#results").append("<br/>");
            $("#results").append("<br/>");


            $.each(resp.data, function (index, value) {
               let hola = "<table><tr><td>"+value.id+"<td><tr></table >";
                $("#results").append(hola);
            });

            //$("#results").append('<table><tr><td>'${resp.data}'<td><tr></table >');
        }
    } catch (e) {
        console.error(e);
    }
}
