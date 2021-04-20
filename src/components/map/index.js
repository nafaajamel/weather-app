import { useState, useContext, useEffect } from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';

import styled from 'styled-components';

import { weatherContext } from './../../context/weather';

import SearchBox from './search-box';

import locationImg from './../../assets/icons/location.png';

const LocationIcon = styled.img`
  height: 25px;
  cursor: pointer;
`;

const MapContainer = styled.div`
  aspect-ratio: 4/3;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const { location, userLocation } = useContext(weatherContext);

  const { latitude, longitude } = location;

  const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const MAP_STYLE_URL = 'mapbox://styles/jamelnafaa/ckk6yfdhi0qir17qrzu2rdaod';

  const handleMapChange = (nextViewport) => {
    setViewport(nextViewport);
  };

  useEffect(() => {
    setViewport({ ...viewport, latitude, longitude });
  }, [location]);

  // handle resize
  useEffect(() => {
    const onResize = () => {
      setViewport(viewport);
    };

    window.addEventListener('resize', onResize);
  }, []);

  const renderMarker = () => {
    return (
      userLocation.latitude !== location.latitude &&
      userLocation.longitude !== location.longitude && (
        <Marker latitude={latitude} longitude={longitude}>
          <LocationIcon src={locationImg} />
        </Marker>
      )
    );
  };

  return (
    <>
      <MapContainer>
        <ReactMapGL
          attributionControl={false}
          mapStyle={MAP_STYLE_URL}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          {...viewport}
          onViewportChange={handleMapChange}
        >
          <SearchBox />
          <GeolocateControl style={{ right: 10, top: 10 }} auto />
          {renderMarker()}
        </ReactMapGL>
      </MapContainer>
    </>
  );
};

export default Map;
