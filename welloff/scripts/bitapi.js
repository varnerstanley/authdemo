var xmlhttp = new XMLHttpRequest();
		var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4  &&  this.status == 200) {
				var json = JSON.parse(this.responseText);
				parseJson(json);
			}
		};

		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function parseJson(json) {
			var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
			var usdValue = "1 BTC equals to $" + json["bpi"]["USD"]["rate"];
			var gbpValue = "1 BTC equals to &pound;" + json["bpi"]["GBP"]["rate"];
			var euroValue = "1 BTC equals to &euro;" + json["bpi"]["EUR"]["rate"];

			document.getElementById("data").innerHTML =
				time + "<br /><br />" + usdValue + "<br />" + gbpValue + "<br />" + euroValue;
}

function reloadThis() {
  location.reload();
}
//check to see if javascript is working
// function component() {
//   var element = document.createElement('p');
//
//   // Lodash, now imported by this script
//   element.innerHTML = 'Setup Appears to be working &#128521;';
//
//   return element;
// }
// document.body.appendChild(component());
//
// //test jquery and Bootstrap setup
// $(document).ready(function() {
//   var element = $('<p></p>').html('Jquery Appears to be working &#128521;');
//
//   element.appendTo('body');
//   $(function() {
//     $('[data-toggle="popover"]').popover();
//   });
// });
