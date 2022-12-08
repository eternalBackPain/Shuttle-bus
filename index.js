// Initialize and add the map
async function initMap() {

    // Getting current position - NEED TO MAKE THIS ASYNC
    function getCurrentPosition() {
        const pos = navigator.geolocation.getCurrentPosition(success, error);
        function success(pos) {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude
            const coords = {
                lat,
                lng
            };
            console.log(coords);
            return coords;
        }

        function error() {
            console.log("ERROR");
        }

        // if (pos) {
        //     return pos;
        // } else return {
        //     lat: -25.344,
        //     lng: 131.031
        // };
    }

    // The map, centered at currentLocation
    const map = await new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: getCurrentPosition(),
    });

}

window.initMap = initMap;