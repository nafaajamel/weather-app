import { useState, useContext } from 'react';

import axios from 'axios';

import { AutoComplete } from 'antd';

import styled from 'styled-components';

import { weatherContext } from './../../context/weather';
const S = {
  AutoComplete: styled(AutoComplete)`
    padding: 5px;
  `,
};

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const { location, setLocation } = useContext(weatherContext);

  const fetchCitiesByName = async () => {
    const mapBoxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    let res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchValue}.json?types=place&limit=5&access_token=${mapBoxToken}`
    );

    return res.data;
  };

  const onSearch = (searchText) => {
    if (searchValue) {
      fetchCitiesByName().then(({ features }) => {
        const featuresFormatted = features.map(({ place_name, geometry }) => ({
          value: place_name,
          label: place_name,
          geometry: geometry,
        }));

        setSuggestions(featuresFormatted);
      });
    }
  };

  const handleSelect = (cityName) => {
    let selectedPlace = suggestions.reduce(
      (acc, { value, geometry }) => {
        return value === cityName
          ? {
              latitude: geometry.coordinates[1],
              longitude: geometry.coordinates[0],
            }
          : acc;
      },
      { ...location }
    );
    console.log(selectedPlace);
    setLocation(selectedPlace);
  };
  return (
    <S.AutoComplete
      value={searchValue}
      options={suggestions}
      style={{ width: 200 }}
      onSelect={handleSelect}
      onSearch={onSearch}
      onChange={(value) => setSearchValue(value)}
      placeholder='search for city'
      allowClear
    />
  );
};

export default SearchBox;
