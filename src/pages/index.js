
import React, { useRef, useEffect } from 'react'

import WebMap from 'esri/WebMap'
import MapView from 'esri/views/MapView'

import styles from './index.css';

const IndexPage = () => {

  const mapDiv = useRef(null);
  useEffect(() => {
    const div = mapDiv.current;
    const map = new WebMap({ basemap: 'osm', });
    const view = new MapView({
      map,
      container: div
    });
    window.view = view;
  });

  return (
    <div className={styles.normal}>
      <div ref={mapDiv} className={styles.map} />
    </div>
  );
}

export default IndexPage;
