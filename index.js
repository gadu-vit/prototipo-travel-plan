function addLocation(e) {
  e.preventDefault();

  let createDivLocation = document.createElement("div");
  createDivLocation.setAttribute("id", "add_next_location");
  createDivLocation.setAttribute("class", "form-group");
  createDivLocation.setAttribute("class", "form-group new-location");

  // document.querySelector('div#sdate_group').append(createDivLocation);

  let locationGroup = document.getElementById("location_group");

  let locationGroupParent = locationGroup.parentNode;

  locationGroupParent.insertBefore(
    createDivLocation,
    locationGroup.nextSibling
  );

  let createLabelNextLocation = document.createElement("label");
  createLabelNextLocation.setAttribute("for", "#");
  createLabelNextLocation.textContent = "Location";

  let createInputLocation = document.createElement("input");
  createInputLocation.setAttribute("type", "text");
  createInputLocation.setAttribute("name", "next-location");
  createInputLocation.setAttribute("class", "form-control");
  createInputLocation.setAttribute("placeholder", "Next location");

  createDivLocation.appendChild(createLabelNextLocation);
  createDivLocation.appendChild(createInputLocation);
}

const addLocationButton = document.getElementById("addLocationButton");
addLocationButton.addEventListener("click", addLocation);

function listTravelPlan(e) {
  e.preventDefault();

  const form = document.querySelector(".travel-plan");
  const listTravelPlan = document.querySelector(".list-travel-plan");

  // Clear any existing list content
  listTravelPlan.innerHTML = "";

  // Get form data
  const title = form.elements.title.value;
  const location = form.elements.location.value;
  const startDate = form.elements.startDate.value;
  const endDate = form.elements.endDate.value;
  const travelers = form.elements.travelers.value;

  // Create list items for each form field
  let listItem = document.createElement("li");
  listItem.textContent = `Title: ${title}`;
  listTravelPlan.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `Location: ${location}`;
  listTravelPlan.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `Start Date: ${startDate}`;
  listTravelPlan.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `End Date: ${endDate}`;
  listTravelPlan.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `Travelers: ${travelers}`;
  listTravelPlan.appendChild(listItem);

  // Get the value of the dynamically added input
  const nextLocationInputs = document.querySelectorAll('input[name="next-location"]');
  const nextLocations = [];
  for (const input of nextLocationInputs) {
    nextLocations.push(input.value);
  }

  // Create list items for filled fields
  const filledFields = [
    { name: "title", value: title },
    { name: "location", value: location },
    { name: "nextLocations", value: nextLocations },
    { name: "startDate", value: startDate },
    { name: "endDate", value: endDate },
    { name: "travelers", value: travelers }
  ].filter(field => field.value);
  if (filledFields.length > 0) {
    filledFields.forEach(field => {
      const listItem = document.createElement("li");
      listItem.textContent = `${field.name}: ${field.value}`;
      listTravelPlan.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No vacation planned yet.";
    listTravelPlan.appendChild(listItem);
  }

}

const saveFormSubmit = document.getElementById("saveFormSubmit");
saveFormSubmit.addEventListener("click", listTravelPlan);