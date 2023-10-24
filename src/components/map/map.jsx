import React, { useRef, useEffect } from "react";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Home from "@arcgis/core/widgets/Home.js";
import Compass from "@arcgis/core/widgets/Compass.js";
import './map.css'
const Map = ({ map_id, layers }) => {
  const mapElement = useRef(null);
  const view = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const webmap = new WebMap({
      portalItem: {
        id: map_id,
      },
    });

    view.current = new MapView({
      map: webmap,
      zoom: 15,
    });

    const scalebar = new ScaleBar({
      view: view.current,
    });

    view.current.ui.add(scalebar, "bottom-left");

    let homeWidget = new Home({
      view: view.current,
    });

    view.current.ui.add(homeWidget, "top-left");

    legend.current = new Legend({
      view: view.current,
    });
    view.current.ui.add(legend.current, "bottom-right");

    let compass = new Compass({
      view: view.current,
    });

    view.current.ui.add(compass, "top-left");

    webmap.load().then(() => {
      webmap.layers.forEach((layer) => {

        if (layers.includes(layer.title)) {
          console.log(layer.title)
          layer.visible = true;
        } else {
          console.error(layer.title)
          layer.visible = false;
        }
      });
    });

    view.current.container = mapElement.current;

    return () => {
      view.current.container = null;
      legend.current.destroy();
    };
  }, [map_id, layers]);

  return <div id="viewDiv" ref={mapElement}></div>;
};

export default Map;
