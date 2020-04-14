function eMap(){
	$.ajax({
		// en"data" pueded utilizar un objueto JSON, array o query string
		data:{"access": arguments[0]},
		//type se puede cambiar por POST
		type:"GET",
		//formato de datos que se espera de rspuesta
		dataType:"json",
		//URl a la que se enviara la solicitud Ajax
		url:"http://192.168.1.67:8080/restfulPattern/webresources/generic"
	})
	.done(function( data, textStatus, jqXHR){
		$("#content").html(data.reply));
	if (console && console.log) {
		console.log("La solicitud se ha completado correctamente");
	}
	})
    .fail(function( jqXHR, textStatus, errorThrown){
    	if(console && console.log){
    		console.log("La solicitud a fallado:" + textStatus);
    	}
    });
}