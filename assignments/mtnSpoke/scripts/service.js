var serviceDataRequest = new XMLHttpRequest();
var serviceDataURL = 'https://varnerstanley.github.io/assignments/mtnSpoke/data/serviceData.json';

serviceDataRequest.open("GET", serviceDataURL, true);
serviceDataRequest.send();

serviceDataRequest.onload = function() {
    let serviceData = JSON.parse(serviceDataRequest.responseText);

    document.getElementById("safetyCheck").innerHTML = serviceData.service[0].name;
    document.getElementById("safetyCost").innerHTML = serviceData.service[0].price;

    document.getElementById("singleSpeed").innerHTML = serviceData.service[1].name;
    document.getElementById("singleSpeedCost").innerHTML = serviceData.service[1].price;

    document.getElementById("standardTune").innerHTML = serviceData.service[2].name;
    document.getElementById("standardTuneCost").innerHTML = serviceData.service[2].price;

    document.getElementById("proTune").innerHTML = serviceData.service[3].name;
    document.getElementById("proTuneCost").innerHTML = serviceData.service[3].price;

    document.getElementById("proTunePlus").innerHTML = serviceData.service[4].name;
    document.getElementById("proTunePlusCost").innerHTML = serviceData.service[4].price;
}
