//console.log("i think i forgot something");
var scheduleStartDatev =  "";
var scheduleStartDate = "";
//scheduleStartDatev.addEventListener({"change", function({document.getElementById('startDate'))});
var day = "";
var month = "";
var year =  "";
var crew = [];
var employee = function (name) {
	this.name = name;
	avalibilty = {
											day1:[],
											day2:[],
											day3:[],
											day4:[],
											day5:[],
											day6:[],
											day7:[]
										};
	hoursAvalibile = null;
	hoursWorking =  null;
};
var adam = new employee('adam');
var alex = new employee('alex');
var daniel = new employee('daniel');
var diego = new employee('diego');
var doug = new employee('doug');
var johnthan = new employee('johnthan');
crew.push(adam);
crew.push(alex);
crew.push(daniel);
crew.push(diego);
crew.push(doug);
crew.push(johnthan);

var app = { 
  screens: {},   // application screens
  Screen: null,   // screen constructor
};


// Start the definition of the Screen constructor.
app.Screen = function(name) {
  this.name = name;
};

// Define a "static" variable to refer to the currently active screen.
app.Screen.currentScreen = null;

// Define a function that Screen instances inherit.
app.Screen.prototype.getDiv = function() {
  return document.getElementById(this.name + '-screen');
};

// Define another function that Screen instances inherit.
app.Screen.prototype.show = function() {
  if (app.Screen.currentScreen) {
    app.Screen.currentScreen.hide();
  }
  this.getDiv().style.display = 'block';
  app.Screen.currentScreen = this;
};
//Define Hide function 
app.Screen.prototype.hide = function() {
    app.Screen.currentScreen.getDiv().style.display = 'none';
};

var getAvalibilty = function(){
	console.log('Called getAvaliblity')
	var emp;
	var h = 1;
	var emptable = document.getElementById('employee' + h);
	
	while(emptable){ 
		emptable = document.getElementById('employee' + h);
		console.log(emptable)
		for(var i = 1, row; row = emptable.rows[i]; i++ ){
			console.log(emptable.id)
		for (var j = 1, cell; cell = row.cells[j]; j++) {
			console.log(cell.innerHTML);
			/*if(cell.checked){
				console.log("true");
			}
			else{
				console.log("false");
			}*/
		}
		}		
		h++
	}
};


// At this point, definition of the Screen constructor is done.
employees.DiegoC = 
// Create the screen instances.
app.screens.loading = new app.Screen('loading');
app.screens.date = new app.Screen('date');
app.screens.empAvail = new app.Screen('empAvail');
app.screens.schedule = new app.Screen('schedule');
employee.adam = new employee('adam');
//app.screens.endgame =  new app.Screen('endgame')
//app.screens.credits = new app.Screen('credits')
// Initialize the currentScreen variable.
//app.Screen.currentScreen = app.screens.date;
app.screens.date.show();
//creates employees static right now

/* helper functions*********************************************************************/



function dateChange(){
			
		if((month == 9 || month == 4 || month == 6 || month == 11) &&(day == 30)){
			month++;
			day = 1;
		}

		else if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8|| month == 10) && (day == 31)){
			month++;
			day = 1;
		}
		else if(month == 2){
			if(day < 28) day++;
			else if(isLeapYear(year) &&(day == 28)) day++;
			else{
				month++;
				day = 1;
			}
		}
		else if(month == 12){
			if(day < 31) day++;
			else{
				day = 1;
				month = 1;
				year++;
			}
		}
		else day++;
}

function isLeapYear(year){
 if(year % 4 == 0){
   if(year % 100 != 0) return true;
   if(year % 400 == 0) return true;
   else return false;
 }
 return false;
};


function employees(employeeBase) {
this.avalibilty = getAvalibilty(employee);

}

/*function getAvalibilty(employee){
	employee.getElementById()
};*/

/*onclick functions *****************************************************************************************************/
document.getElementById('avilSub'). onclick = function(){
	
	getAvalibilty(); 


};


//adds date to schedule
  document.getElementById('dateSubmit').onclick = function() {
	scheduleStartDatev =  document.getElementById('startDate');
	scheduleStartDate = document.getElementById('startDate').value;
	app.screens.empAvail.show();
	var begin = 0;
	for (var i = 0; i < scheduleStartDate.length; i++){

		if(begin < 1){

			if(scheduleStartDate[i] == "/" || scheduleStartDate == "-"){
				month = scheduleStartDate.substring(begin, i);
				begin = i+1;
			}
		}else{
			if(scheduleStartDate[i] == "/" || scheduleStartDate == "-"){
				day = scheduleStartDate.substring(begin, i);
				begin = i+1;
			}
		}
		year = scheduleStartDate.substring(begin, (scheduleStartDate.length));
		}
	var table = document.getElementById("scheduleDates");
	/*var employee1 = document.getElementById("employee1");
	var employee2 = document.getElementById("employee2");
	var employee3 = document.getElementById("employee3");
	var employee4 = document.getElementById("employee4");
	var employee5 = document.getElementById("employee5");
	var employee6 = document.getElementById("employee6");
	var employee7 = document.getElementById("employee7");
	//var row = table.cells[1].innerHTML;*/
	
	for(var i = 1, col; col = table.cells[i]; i++){
		col.innerHTML = (month + '/' + day + '/' + year);
		employee1.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee2.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee3.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee4.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee5.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee6.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		employee7.rows[i].cells[0].innerHTML = (month + '/' + day + '/' + year);
		dateChange();
		 	

	}
	var node = document.getElementById('container');
	var newnode = document.createElement('select');
	node.appendChild(newnode);
	//node.add(newnode, 0);
	
	for(var i = 0; i < crew.length; i++){
		var option = document.createElement('option');
		option.id = crew[i].name;
		option.value = crew[i].name;
		option.text = crew[i].name;
		newnode.appendChild(option);
		
	}
	

	//app.screens.empAvail.show();
	//alert("this is month " + month);
	//alert("this is day " + day);
	//alert("this is year " + year);
};
document.getElementById('adam').onclick = function(){
	
};