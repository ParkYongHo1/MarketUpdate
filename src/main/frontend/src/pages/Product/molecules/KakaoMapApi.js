import React, { useEffect, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMapApi = ({ member }) => {
  const mapRef = useRef();
  const latitude = member?.location?.latitude || 37.558090961074825;
  const longitude = member?.location?.longitude || 126.99847210567884;

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.setZoomable(false); // 확대/축소 방지
    }
  }, []);

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "200px" }}
      onCreate={(map) => {
        mapRef.current = map;
        map.setZoomable(false); // 확대/축소 방지
      }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}>
        <div style={{ color: "#000" }}>
          {member?.location?.address || "구리시 인창동"}
        </div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMapApi;
