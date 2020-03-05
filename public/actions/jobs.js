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
        const resp = await axios.get(`${base_url}description=${data.description}&location=${data.location}&lat=${data.lat}&long=${data.long}&full_time=${data.full_time}`, data);
        console.log("la url que se esta enviando es-- " + resp);
        if (resp.data) {
            //data exist
            

            if (resp.data.length !== 0) { //vanilla JS
                window.location.href = '/';

            }
        }
    } catch (e) {
        console.error(e);
    }
}