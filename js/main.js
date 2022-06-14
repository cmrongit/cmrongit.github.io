// // BOOTSTRAP

// <!-- JavaScript Bundle with Popper -->
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

// //

// SIDEBAR

const sidebarDisplay = document.getElementById('burger');

sidebarDisplay.addEventListener("click", displaySidebar);

const sidebarClose = document.getElementById('x-to-close');

sidebarClose.addEventListener("click", hideSidebar);

function displaySidebar () {
	sidebar.classList.add("show-menu");
}

function hideSidebar () {
	sidebar.classList.remove("show-menu")
}


// function hideSidebar(event) {
// 	if (!event.target.matches(".sidebar-links")) {
// 	sidebar.classList.remove("show");
// 	}
// }


// SLIDES

// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new.bootstrap.Carousel(myCarousel)





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


// switch(orphanName) {
// 	case 'frank':
// 	case 'sadie':
// 	case 'rex':
// 	case 'earhart':
// 	case 'sparks':
// 	case 'banjo':
// 	case 'dumpling':
// 	case 'jimothy':
// 	case 'pemily':
// 	case 'fathom':
// 	case 'bucket':
// 	case 'jib':
// 	case 'flankrin':
// 	case 'bragnes':
// 	case 'platano':
// }




