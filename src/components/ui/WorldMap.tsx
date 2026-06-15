import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Style, Icon } from "ol/style";
import { defaults } from "ol/control/defaults";

export interface City {
  name: string;
  lat: number;
  lon: number;
}

interface WorldMapProps {
  cities: City[];
}

const WorldMap = ({ cities }: WorldMapProps) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const features = cities.map((city) => {
      return new Feature({
        geometry: new Point(fromLonLat([city.lon, city.lat])),
      });
    });

    const vectorSource = new VectorSource({ features });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "/icons/map-pin.svg",
          scale: 0.5,
        }),
      }),
    });

    const map = new Map({
      target: mapElement.current,
      controls: defaults({
        zoom: false,
      }),
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({
        center: fromLonLat([0, 20]),
        zoom: 2,
      }),
    });

    return () => map.setTarget(undefined);
  }, [cities]);

  return (
    <div
      ref={mapElement}
      className="w-full h-[400px] rounded-2xl overflow-hidden border border-2 border-mist-700"
    />
  );
};

export default WorldMap;
