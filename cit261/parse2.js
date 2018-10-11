var xmlhttp = new XMLHttpRequest();
var serviceDataURL = 'https://www.w3schools.com/js/json_demo.txt';



serviceDataRequest.onload = function() {
    let serviceData = JSON.parse(serviceDataRequest.responseText);
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = myObj.name;
    }

  }
  serviceDataRequest.open("GET", serviceDataURL, true);
  serviceDataRequest.send();
