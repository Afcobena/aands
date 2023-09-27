import { useMemo } from 'react';
import {
  GoogleMap, MarkerF, useLoadScript
} from "@react-google-maps/api";

const containerStyle = {
  width: '90%',
  height: "25vh",
};

export default function Map() {
  const center = useMemo(() => ({
    lat: 51.537793731262134,
    lng: -0.7068510371442662
  }), []);
  const options = useMemo(() => ({
    mapId: "9d21d2c5f65148a0",
    disableDefaultUI: true,
    clickableIcons: false,
  }), [])

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className='map'>
      <div className='map__container'>
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerStyle={containerStyle}
          options={options}
          className="map__container--img"
        >
          <MarkerF
            position={center}
          />
        </GoogleMap>
      </div>
    </div>
  )
}
