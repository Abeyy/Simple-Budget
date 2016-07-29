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

function display_budget_data(){
	var budget_data = document.getElementById("user-budget-form");
	var hourly = budget_data.elements['hourly_pay'].value;
	var time = budget_data.elements['hours_worked'].value;
	var tax_percentage = budget_data.elements['tax'].value
	var pay = hourly * time;
	var tax = pay * tax_percentage;
	var days_traveling = budget_data.elements['days_traveling'].value;
	var travel_cost = budget_data.elements['travel_cost'].value;
	var weekly_travel_cost = days_traveling * travel_cost;
	var food_cost = budget_data.elements['food_cost_daily'].value;
	var weekly_food_cost = food_cost * 7;
	var leisure = budget_data.elements['leisure_cost'].value;
	var investment = budget_data.elements['investments'].value;
	var leftover = pay - (tax + weekly_travel_cost + weekly_food_cost + leisure + investment);
	document.getElementById('display_weekly_pay').innerHTML = ("Your total paycheck for this week is: " + pay);
	document.getElementById('display_tax_pay').innerHTML = ("The amount you should set aside for tax is: " + tax);
	document.getElementById('display_travel_cost').innerHTML = ("The amount you should set aside for travel is: " + weekly_travel_cost);
	document.getElementById('display_food_cost').innerHTML = ("The amount you should set aside for food is: " + weekly_food_cost);
	document.getElementById('display_leisure_cost').innerHTML = ("The amount you should set aside for leisure is: " + leisure);
	document.getElementById('display_investment_cost').innerHTML = ("The amount you should set aside for investments is: " + investment);
	if (leftover < 0){
		document.getElementById('display_status').innerHTML("You do not have enough money! You are short: " + leftover + " dollars.");
	}
	if (leftover > 0 || leftover == 0){
		document.getElementById('display_status').innerHTML("You have " + leftover + " dollars leftover.");
	}
	return false; // The form refreshes the page on submit, so onclick was set to return test() and test returns false.
}

function display_savings_data(){
	var savings_data = document.getElementById("user-savings-form");
	var weekly_savings = savings_data.elements['saving_cost'].value;
	var num_weeks = savings_data.elements['num_weeks'].value;
	var growth = savings_data.elements['growth'].value;

}



