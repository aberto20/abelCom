 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

 app.controller("maincontroller",function($scope){
	 var s1 = {name: "Tigo Airtime", provider: "Tigo", active: true};
	 var s2 = {name: "Tigo cash", provider: "Tigo", active: true};

	 var s4 = {name: "MTN Airtime", provider: "MTN", active: true};
	 var s5 = {name: "Mtn mobile money", provider: "MTN", active: true};

	 var s6 = {name: "Prepaid electricity", provider: "EUCL", active: true};

	 var s7 = {name: "Star time TV", provider: "Star time", active: true};

	 var s8 = {name: "DSTV Booket", provider: "DSTV", active: true};
	 var s9 = {name: "Canal Booket", provider: "DSTV", active: true};

	 $scope.service = [];
	 $scope.service[0] = {name: "Tigo", services: [s1, s2], active: true};
	 $scope.service[1] = {name: "MTN", services: [s4, s5], active: true};
	 $scope.service[2] = {name: "EUCL", services: [s6], active: true};
	 $scope.service[3] = {name: "Star time", services: [s7], active: true};
	 $scope.service[4] = {name: "DSTV", services: [s8, s9], active: true};

	 $scope.selectedProvider = {};
      console.log($scope.service);
	 $scope.loadSelectedProvider = function(name){

		 for(var p in $scope.service){
			 if($scope.service[p].name == name){
				 $scope.selectedProvider = $scope.service[p]
			 }
		 }

	 };
	 $scope.whichService = function (path) {
		 var p = path.replaceAll(" ", "%20");
		 if ($location.absUrl().indexOf(p) > -1) {
			 //alert(path);
			 return true;
		 }

		 return false;
	 };

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