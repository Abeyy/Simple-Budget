function simulate_login(){
	var login_data = document.getElementById("log-in-form");
	var name = login_data.elements['user_name'].value;
	var password = login_data.elements['user_password'].value;
	if (name == ''){
		alert('Please enter a username!');
	}
	if (password != 'password'){
		alert('Incorrect Password!');
	}
	if (password == 'password'){
	document.getElementById("log-in-form").innerHTML = "Hello, " + name;
	}
}

function test(){
	var budget_data = document.getElementById("user-budget-form");
	var hourly = budget_data.elements['hourly_pay'].value;
	var time = budget_data.elements['hours_worked'].value;
	document.getElementById('display_demo').innerHTML = "BUTTON WORKS";
	return false; // The form refreshes the page on submit, so onclick was set to return test() and test returns false.
}
