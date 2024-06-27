import React, { useEffect, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMapApi = () => {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.setZoomable(false); // 확대/축소 방지
    }
  }, []);

  return (
    <Map
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
      style={{ width: "100%", height: "200px" }}
      onCreate={(map) => {
        mapRef.current = map;
        map.setZoomable(false); // 확대/축소 방지
      }}
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
