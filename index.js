function addLocation(e) {
  e.preventDefault();

  let createDivLocation = document.createElement("div");
  createDivLocation.setAttribute("id", "add_next_location");
  createDivLocation.setAttribute("class", "form-group");
  createDivLocation.setAttribute("class", "form-group new-location");

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

  const createDivButtons = document.createElement("div");
  createDivButtons.setAttribute("class", "button-group");

  const createPrintButton = document.createElement("input");
  createPrintButton.setAttribute("type", "button");
  createPrintButton.setAttribute("id", "print");
  createPrintButton.setAttribute("value", "Print");

  const createDeleteButton = document.createElement("input");
  createDeleteButton.setAttribute("type", "button");
  createDeleteButton.setAttribute("id", "delete");
  createDeleteButton.setAttribute("value", "Delete");

  createDivButtons.appendChild(createPrintButton);
  createDivButtons.appendChild(createDeleteButton);

  // Get form data
  const title = form.elements.title.value;
  const location = form.elements.location.value;
  const startDate = form.elements.startDate.value;
  const endDate = form.elements.endDate.value;
  const travelers = form.elements.travelers.value;

  // Create list items for each form field
  let ulItem = document.createElement("ul");

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
    { name: "Title", value: title },
    { name: "Location", value: location },
    { name: "Next Locations", value: nextLocations },
    { name: "Start Date", value: startDate },
    { name: "End Date", value: endDate },
    { name: "Travelers", value: travelers },
  ].filter((field) => field.value);

  // Create a new div element to hold the ul list
  const createDivList = document.createElement("div");
  createDivList.setAttribute("class", "list-plan");
  createDivList.setAttribute("id", "my-plans");

  // Create a new div element to hold the ul list
  if (filledFields.length > 0) {
    filledFields.forEach((field) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${field.name}: ${field.value}`;
      // Create a new ul element for each list
      ulItem.appendChild(listItem);
      createDivList.appendChild(ulItem);
      createDivList.appendChild(createDivButtons);
      listTravelPlanContainer.appendChild(createDivList);

      const printBtn = document.getElementById("print");
      printBtn.addEventListener("click", printButton);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = "No vacation planned yet.";
    createDivList.appendChild(createDivButtons);
    listTravelPlanContainer.appendChild(listItem);

    const printBtn = document.getElementById("print");
    printBtn.addEventListener("click", printButton);
  }

  form.reset();
}

const saveFormSubmit = document.getElementById("saveFormSubmit");
saveFormSubmit.addEventListener("click", listTravelPlan);

function printButton(e) {
  e.preventDefault();

  var prtContent = document.getElementById("my-plans");
  var WinPrint = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  );
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.setTimeout(function () {
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  }, 1000);
  // print button
}

