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
  const listTravelPlanContainer = document.querySelector(".list-travel-plan");

  // Get form data
  const title = form.elements.title.value;
  const location = form.elements.location.value;
  const startDate = form.elements.startDate.value;
  const endDate = form.elements.endDate.value;
  const travelers = form.elements.travelers.value;

  // Create list items for each form field
  let ulItem = document.createElement("ul");
  // let listItem = document.createElement("li");

  // listItem.textContent = `Title: ${title}`;
  // ulItem.appendChild(listItem);

  // listItem = document.createElement("li");
  // listItem.textContent = `Location: ${location}`;
  // ulItem.appendChild(listItem);

  // listItem = document.createElement("li");
  // listItem.textContent = `Start Date: ${startDate}`;
  // ulItem.appendChild(listItem);

  // listItem = document.createElement("li");
  // listItem.textContent = `End Date: ${endDate}`;
  // ulItem.appendChild(listItem);

  // listItem = document.createElement("li");
  // listItem.textContent = `Travelers: ${travelers}`;
  // ulItem.appendChild(listItem);

  // // Get the value of the dynamically added input
  const nextLocationInputs = document.querySelectorAll(
    'input[name="next-location"]'
  );
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
    { name: "travelers", value: travelers },
  ].filter((field) => field.value);

  // Create a new div element to hold the ul list
  const createDivList = document.createElement("div");
  createDivList.setAttribute("class", "list-plan");

  // Create a new div element to hold the ul list
  if (filledFields.length > 0) {
    filledFields.forEach((field) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${field.name}: ${field.value}`;
      // Create a new ul element for each list
      ulItem.appendChild(listItem);
      createDivList.appendChild(ulItem);
      listTravelPlanContainer.appendChild(createDivList);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No vacation planned yet.";
    listTravelPlanContainer.appendChild(listItem);
  }
}

const saveFormSubmit = document.getElementById("saveFormSubmit");
saveFormSubmit.addEventListener("click", listTravelPlan);
