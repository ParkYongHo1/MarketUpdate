import { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const KakaoMapApi = () => {
  return (
    <Map
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      style={{ width: "100%", height: "200px" }}
    >
      <MapMarker
        position={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      >
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};
export default KakaoMapApi;
