
function updateInput(input) {
    getData().then((data) => {
        var container = document.getElementById('container');

        var html = data.values.map( value => `<div>${input} * ${value} = ${input * value}</div>` );
        container.innerHTML = html.join('');
    })

}

function getData () {
    return fetch('./data.json')
        .then((data) =>
            data.json().then(
                data => { 
                    return data;

                }))
 
}