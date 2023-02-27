class GeoPos {
  constructor() {
    this.getGeoInfo();
  }
  geoShowPosition = position => {
    if (position) {
      const location = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.geoPosition = position.coords;
    } else {
      console.error('reject');
    }
  };

  geoShowError = error => {
    console.error(`getPosError:${error.code},${navigator.geolocation},${error.message}`);
  };

  getGeoInfo = () => {
    navigator.geolocation.getCurrentPosition(this.geoShowPosition, this.geoShowError);
  };
}
