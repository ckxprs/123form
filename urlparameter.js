function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Example usage:
var paramName = "unique_id"; // Replace with the name of the parameter you want to retrieve
var paramValue = getParameterByName(paramName);

loader.getEngine().getDocument().getControlsList().forEach(function (control) { 
    if (control.id === 109686072) {
        control.setValue({ value: paramValue });
    }
});