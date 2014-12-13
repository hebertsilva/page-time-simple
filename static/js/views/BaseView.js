
App.objects.BaseView = function() {
	this.win = $(window);
	this.$city = $('.city');
	this.$estate = $('.estate');
	
	this.$temp = $('.temp');

	this.$hours = $('.hours');
	this.$minute = $('.minute');

	this.$dayName = $('.day-name');
	this.$dayNumber = $('.day-number');
	this.$month = $('.month');
	this.$year = $('.year');

	this.initEvents();
}

App.objects.BaseView.prototype = {
	initEvents: function() {
		this.getLocationUser();
		this.getTimeDateView();
		this.loadTimeView();
	},

	getTimeDateView: function() {
		this.date = new Date();
		this.$hours.text( this.date.getHours() );
		this.$minute.text( this.date.getUTCMinutes() );
		this.$dayName.text( this.getTextDay( this.date.getDay() ) );
		this.$dayNumber.text( this.date.getDate() );
		this.$month.text( this.getTextMonth( this.date.getMonth() ) );
		this.$year.text( this.date.getFullYear() );		
	},

	loadTimeView: function() {
		var that = this;
		setInterval(function() {
			that.getTimeDateView();
		}, 1000);
	},

	getTextDay: function( day ) {
		switch(day) {
		    case 1:
		        return "segunda";
		    case 2:
		        return "terça-feira";
		    case 3:
		        return "quarta-feira";
		    case 4:
		        return "quinta-feira";
		    case 5:
		        return "sexta-feira";
		    case 6:
		        return "sábado";
		    case 7:
		        return "domingo";
		}
	},

	getTextMonth: function( month ) {
		switch(month) {
		    case 0:
		        return "jan";
		    case 1:
		        return "fev";
		    case 2:
		        return "mar";
		    case 3:
		        return "abr";
		    case 4:
		        return "mai";
		    case 5:
		        return "jun";
		    case 6:
		        return "jul";
		    case 7:
		        return "ago";
		    case 8:
		        return "set";
		    case 9:
		        return "out";
		    case 10:
		    	return "nov";
		    case 11:
		    	return "dez";
		}
	},

	getLocationUser: function() {
		if ( navigator.geolocation ) {
	        navigator.geolocation.getCurrentPosition( $.proxy(this.getTempCurrent, this) );
	    } else {
	        window.alert('Seu navegador não suporta HTML 5 Geo Location');
	    }
	},

	getTempCurrent: function( position ) {		
		var that = this;
		var lat = position.coords.latitude;
		var log = position.coords.longitude;
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+log+'&type=like';
		
		$.getJSON( url ).done(function( data ){
			that.$city.text( data.name );
			that.$temp.text( data.main.temp.toFixed(0).slice(0, 2) );
		});
	},

	setTemp: function( data ) {
		console.log(data);
	}
}

$(function() {
	App.objects.baseView = new App.objects.BaseView();
});