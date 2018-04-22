// document ready event
$(document).ready(function() {
	$('#verb1').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs').append(imgContainer);
    
					}
                    
				}
			});
		}
	});
//q2 //   
    $('#char_name').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs2').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs2').append(imgContainer);
					}
				}
			});
		}
	});
//    q3
  $('#emotion').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs3').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs3').append(imgContainer);
					}
				}
			});
		}
	});  
//q4
    $('#verb2').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs4').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs4').append(imgContainer);
					}
				}
			});
		}
	});  
//q5
    $('#remarks').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs5').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs5').append(imgContainer);
					}
				}
			});
		}
	});  
//q6
    $('#obj').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs6').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs6').append(imgContainer);
					}
				}
			});
		}
	});  
//q7
    $('#anim').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs7').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs7').append(imgContainer);
					}
				}
			});
		}
	});  
//q8
    $('#char1').on("keypress", function(event) {
		if (event.which == 13) {
            const story= document.createElement("p");
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "P7NLCftNCTpBvJr3RlwWp8YUZ9RTcKgy";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;		
			$.getJSON(url, function(json) {
				console.log(json);
                document.getElementById('gifs8').innerHTML = "";
                for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
						const imgContainer = $('<div>')
							.addClass('gif');
						imgContainer.append(imgElem);
					  $('#gifs8').append(imgContainer);
					}
				}
			});
		}
	});  








});