function getValue(e) {
    e.preventDefault();
    
    let qtdLocations = document.getElementById('qtd-locations').value;


    if(qtdLocations > 1 && qtdLocations <= 5){
        for(let i = 1; i < qtdLocations; i++) {
            let locationContainer = document.createElement('div');
            locationContainer.setAttribute('id', 'location-container');
            locationContainer.setAttribute('class', 'form-group');
            locationContainer.innerHTML = '';

            let createInput = document.createElement('input');
            createInput.setAttribute('type', 'text');
            createInput.setAttribute('name', 'location' + i);
            createInput.setAttribute('class', 'form-control');
            createInput.setAttribute('placeholder', 'Next location' + i);

            locationContainer.appendChild(createInput);
        }
    }
}