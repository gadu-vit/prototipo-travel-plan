function addLocation(e) {
    e.preventDefault();

    
    let createDivLocation = document.createElement('div');
    createDivLocation.setAttribute('id', 'add_next_location');
    createDivLocation.setAttribute('class', 'form-group');
    createDivLocation.setAttribute('class', 'form-group new-location');
    
    
    // document.querySelector('div#sdate_group').append(createDivLocation);
    
    let locationGroup = document.getElementById('location_group');
    
    let locationGroupParent = locationGroup.parentNode;
    
    locationGroupParent.insertBefore(createDivLocation, locationGroup.nextSibling);
    
    let createLabelNextLocation = document.createElement('label');
    createLabelNextLocation.setAttribute('for', '#');
    createLabelNextLocation.textContent = "Location";
    
    let createInputLocation = document.createElement('input');
    createInputLocation.setAttribute('type', 'text');
    createInputLocation.setAttribute('name', 'next-location');
    createInputLocation.setAttribute('class', 'form-control');
    createInputLocation.setAttribute('placeholder', 'Next location');
    
    createDivLocation.appendChild(createLabelNextLocation);
    createDivLocation.appendChild(createInputLocation);
}

const addLocationButton = document.getElementById('addLocationButton');
addLocationButton.addEventListener('click', addLocation);