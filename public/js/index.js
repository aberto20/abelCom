 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

 app.controller("maincontroller",function($scope){
	 Highcharts.chart('container', {
		 chart: {
			 type: 'line'
		 },
		 title: {
			 text: 'Today revenue'
		 },
		 xAxis: {
			 categories: ['00:00','01:00','02:00','03:00','04:00']
		 },

		 series: [{
			 name: 'Amount',
			 data: [897,23659,456987,236598,45665]
		 }]
	 });
	 Highcharts.chart('container2', {
		 chart: {
			 type: 'area'
		 },
		 title: {
			 text: 'Last 7days revenue'
		 },
		 xAxis: {
			 categories: ['2017-06-11','2017-06-12','2017-06-13','2017-06-14']
		 },

		 series: [{
			 name: 'Amount',
			 data: [23659856,23656324,2314565,36598756]
		 }]
	 });
 });