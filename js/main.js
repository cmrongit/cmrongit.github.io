
// SIDEBAR

const sidebarDisplay = document.getElementById('burger');
sidebarDisplay.addEventListener("click", displaySidebar);

function displaySidebar () {
	sidebar.classList.add("show-menu");
}


const sidebarClose = document.getElementById('x-to-close');
sidebarClose.addEventListener("click", sidebarVanish);

const factsLink = document.querySelector("#facts-link")
factsLink.addEventListener("click", sidebarVanish)

const aboutLink = document.querySelector("#about-link")
aboutLink.addEventListener("click", sidebarVanish)

const galleryLink = document.querySelector("#gallery-link")
galleryLink.addEventListener("click", sidebarVanish)

const applicationLink = document.querySelector("#application-link")
applicationLink.addEventListener("click", sidebarVanish)


function sidebarVanish() {
	sidebar.classList.remove("show-menu")
}




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
	if (phoneNumber.value.length < 10) {
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

	let squareFootage = document.querySelector("#square-footage");
	if (squareFootage.value < 1000) {
		addError("Square footage is too low.");
	}

	let occupants = document.querySelector("#occupants");
	if (occupants.value < 4) {
		addError("Number of occupants is too low.");
	}

	let selectOrphan = document.querySelector("#select");
	if (selectOrphan.value === "Name") {
		addError("Please select an orphan to foster.");
	}
}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}





// MODAL

$(".show").on("click", function(){
  $(".mask").addClass("active");
});


function closeModal(){
  $(".mask").removeClass("active");
}


$(".close, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});







// – AS IF SIDEBAR - DNF
// const modalDisplay = document.getElementById('submit-date');
// modalDisplay.addEventListener("click", showModal);

// function showModal () {
// 	document.classList.add("show-modal");
// }





// // FORM B

// const formb = document.querySelector("#schedule-form");
// const errorsListb = document.querySelector("#errors-schedule");

// formb.addEventListener("submit", validateFormb);

// function validateFormb(event) {
//   event.preventDefault();

// 	errorsListb.innerHTML = "";

// 	let selectTime = document.querySelector("#select-time");
// 	if (selectTime.value.length === "time") {
// 		addError("Please select a time.");
	
// 	let selectDay = document.querySelector("#select-day");
// 	if (selectDayvalue.length === "day") {
// 		addError("Please select a day.");
	
// 	let selectMonth = document.querySelector("#select-month");
// 	if (selectMonth.value.length === "month") {
// 		addError("Please select a month.");
	
// 	let selectYear = document.querySelector("#select-year");
// 	if (selectYear.value.length === "year") {
// 		addError("Please select a year.");
// 	}


// function addError(error) {
//   let li = document.createElement("li");
//   li.innerText = error;
//   errorsList.appendChild(li);
// }











