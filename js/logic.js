$( document ).ready(function(){
	var dateInput,
	monthName,
	days,
	daysCont,
	month;
	$('#btnCreate').click(function(){

		dateInput = $('#startDate').val(),
		date = new Date(dateInput);
		//alert(date.getDate());
		month = $('<div class="month"></div>');
		$('#divCont').append(month);
		createClendar()
		days = $('<ul class="weekdays"><li>Su</li><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li></ul>');
		$('#divCont').append(days);
		createDaysCont();
		$('.formCalendar').hide();

	})
	function createClendar(){			
		switch(date.getMonth()){
			case 0:
				monthName = $('<p class="monthName">Enero</p>')
				month.append(monthName);
				break;
			case 1:
				monthName = $('<p class="monthName">Febrero</p>')
				month.append(monthName);
				break;
			case 2:
				monthName = $('<p class="monthName">Marzo</p>')
				month.append(monthName);
				break;
			case 3:
				monthName = $('<p class="monthName">Abril</p>')
				month.append(monthName);
				break;
			case 4:
				monthName = $('<p class="monthName">Mayo</p>')
				month.append(monthName);
				break;
			case 5:
				monthName = $('<p class="monthName">Junio</p>')
				month.append(monthName);
				break;
			case 6:
				monthName = $('<p class="monthName">Julio</p>')
				month.append(monthName);
				break;
			case 7:
				monthName = $('<p class="monthName">Agosto</p>')
				month.append(monthName);
				break;
			case 8:
				monthName = $('<p class="monthName">Setiembre</p>')
				month.append(monthName);
				break;
			case 9:
				var monthName = $('<p class="monthName">Octubre</p>')
				month.append(monthName);
				break;
			case 10:
				monthName = $('<p class="monthName">Nobiembre</p>')
				month.append(monthName);
				break;
			case 11:
				monthName = $('<p class="monthName">Diciembre</p>')
				month.append(monthName);
				break;
		}
	}
	function createDaysCont(){
		daysContUl = $('<ul class="days"></ul>')
		$('#divCont').append(daysContUl);
		for(var i = 0; i < moment(date).daysInMonth(); i++){
			if((i + 1) === date.getDate()){
				daysContLi = $('<li></li>').attr({class: 'today'});
				daysContLi.text(i + 1);
				daysContUl.append(daysContLi);
			}else{
				daysContLi = $('<li></li>').text(i + 1);
				daysContUl.append(daysContLi);
			}
			


		}

	}






});