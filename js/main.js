
// SIDEBAR - first try:

const sidebarDisplay = document.getElementById('burger');

sidebarDisplay.addEventListener("click", displaySidebar);

function displaySidebar () {
	sidebar.classList.add("show-menu");
}


const sidebarClose = document.getElementById('x-to-close');

sidebarClose.addEventListener("click", hideSidebar);

function hideSidebar () {
	sidebar.classList.remove("show-menu")
}



// // SIDEBAR - second try:

// const menu1Button = document.getElementById('burger');

// const menu1Dropdown = document.getElementById('sidebar');

// menu1Button.addEventListener("click", displayMenuOne);

// function displayMenuOne () {
//   menu1Dropdown.classList.add("show");
// }

// document.addEventListener("click", hideMenus)

// function hideMenus(event) {
//   if (!event.target.matches(".sidebar-links li")) {
//   menu1Dropdown.classList.remove("show");
//   }
// }






// FORMS

const form = document.querySelector("#application-form");
const errorsList = document.querySelector("#errors");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

	errorsList.innerHTML = "";

	let firstName = document.querySelector("#first-name");
	if (firstName.value.length < 2) {
		addError("Please enter a first name.");
	}

	let surname = document.querySelector("#surname");
	if (surname.value.length < 2) {
		addError("Please enter a surname.");
	}

	let phoneNumber = document.querySelector("#phone");
	if (phoneNumber.value.length < 2) {
		addError("Please enter a valid phone number.");
	}

	let email = document.querySelector("#email");
	if (email.value.length < 2) {
		addError("Please enter a valid email.");
	}

	let streetAddress = document.querySelector("#street-address");
	if (streetAddress.value.length < 2) {
		addError("Please enter a street address.");
	}

	let city = document.querySelector("#city");
	if (city.value.length < 2) {
		addError("Please enter a city.");
	}

	let state = document.querySelector("#state");
	if (state.value.length < 2) {
		addError("Please enter a state/territory.");
	}

	let postalCode = document.querySelector("#postal-code");
	if (postalCode.value.length < 2) {
		addError("Please enter a postal code.");
	}

	let country = document.querySelector("#country");
	if (country.value.length < 2) {
		addError("Please enter a country.");
	}

}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}



// ERROR MESSAGES

// addError("Please enter square footage.")
// addError("Please enter number of occupants.")

// * addError("Please select a type of dwelling.")

// addError("Please choose an orphan.")
// addError("Please enter a valid calf name.")



