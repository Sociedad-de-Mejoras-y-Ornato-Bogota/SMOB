import  { useRef, useEffect } from "react";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Home from "@arcgis/core/widgets/Home.js";
import Compass from "@arcgis/core/widgets/Compass.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";
import esriConfig from "@arcgis/core/config.js";
import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D.js";
import './map.css'
const Map = ({ map_id, layers, zoom, center }) => {
  const mapElement = useRef(null);
  const view = useRef(null);
  const legend = useRef(null);
  const layerListRef = useRef();
  

  useEffect(() => {
    esriConfig.apiKey = "AAPKb48bcda51f51466da531fada6e3adc1ep53xJznml5LFFadfaZd0AW7wd2tVXz38VJluote0e3sY3B2I-_sNV6Iu1zU9SOVp";
    const webmap = new WebMap({
      portalItem: {
        id: map_id,
      },
    });

    view.current = new MapView({
      map: webmap,
      zoom: zoom,
      center: center
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
  
 let layerList = new LayerList({
      view: view.current,
    })

    let layerListExpand = new Expand({
      expandIcon: "layers",  // see https://developers.arcgis.com/calcite-design-system/icons/
      // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
      view: view.current,
      content: layerList
    });
    view.current.ui.add(layerListExpand, "top-left");

    let basemapGallery = new BasemapGallery({
      view: view.current
    });

    let basemapListExpand = new Expand({
      expandIcon: "basemap",  // see https://developers.arcgis.com/calcite-design-system/icons/
      // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
      view: view.current,
      content:basemapGallery
    });

    view.current.ui.add(basemapListExpand, "top-left");

    let measurement = new DistanceMeasurement2D({
      view: view.current
    });

    let measureExpand = new Expand({
      expandIcon: "measure",  // see https://developers.arcgis.com/calcite-design-system/icons/
      // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
      view: view.current,
      content:measurement
    });

    view.current.ui.add(measureExpand, "top-left");

    webmap.load().then(() => {
      webmap.layers.forEach((layer) => {
        if (layers.includes(layer.title)) {
          layer.visible = true;
        } else {
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
