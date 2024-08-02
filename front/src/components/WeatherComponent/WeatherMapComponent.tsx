import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { API_KEY_WEATHER } from "@/lib/server/envs";

const KEY = API_KEY_WEATHER;
console.log(KEY);

declare global {
  interface Window {
    initMap: () => void;
  }
}

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const inputTextRef = useRef<HTMLInputElement | null>(null);
  const responseRef = useRef<HTMLPreElement | null>(null);
  const responseDivRef = useRef<HTMLDivElement | null>(null);
  const submitButtonRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  let map: google.maps.Map;
  let marker: google.maps.Marker;
  let geocoder: google.maps.Geocoder;

  useEffect(() => {
    window.initMap = initMap;

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      script.remove();
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;
    map = new google.maps.Map(mapRef.current, {
      zoom: 8,
      center: { lat: -38.416097, lng: -63.61667199999999 },
      mapTypeControl: false,
    });

    geocoder = new google.maps.Geocoder();

    const inputText = document.createElement("input");
    inputText.classList.add(
      "font-bold",
      "py-2",
      "px-4",
      "mt-4",
      "ml-4",
      "rounded",
      "w-2/6"
    );
    inputText.type = "text";
    inputText.placeholder = "Ingresa la ciudad del establecimiento";
    inputTextRef.current = inputText;

    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "BUSCAR";
    submitButton.classList.add(
      "button",
      "bg-footerColor",
      "w-14",
      "h-7",
      "mt-4",
      "rounded",
      "text-white",
      "ml-4"
    );
    submitButtonRef.current = submitButton;

    const response = document.createElement("pre");
    response.id = "response";
    response.innerText = "";
    responseRef.current = response;

    const responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);
    responseDivRef.current = responseDiv;

    const instructionsElement = document.createElement("p");
    instructionsElement.id = "instructions";
    instructionsElement.classList.add(
      "bg-white/80",
      "rounded",
      "ml-4",
      "text-md",
      "p-1"
    );
    instructionsElement.innerHTML =
      "Ingrese la ciudad del establecimiento y haga clic en el mapa para seleccionar las coordenadas.";
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(
      instructionsElement
    );
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(
      instructionsElement
    );
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);

    marker = new google.maps.Marker({
      map,
    });

    map.addListener("click", (e: any) => {
      geocode({ location: e.latLng });
    });

    submitButton.addEventListener("click", () =>
      geocode({ address: inputText.value })
    );

    clear();
  };

  const clear = () => {
    if (marker) marker.setMap(null);
    if (responseDivRef.current) responseDivRef.current.style.display = "none";
  };

  const geocode = (request: any) => {
    let latitude: any;
    let longitude: any;
    clear();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;

        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);

        if (responseDivRef.current)
          responseDivRef.current.style.display = "block";
        if (responseRef.current) {
          const location = results[0].geometry.location;
          responseRef.current.innerText = JSON.stringify(location, null, 2);

          latitude = location.lat();
          longitude = location.lng();
          console.log("Latitude:", latitude);
          console.log("longitude:", longitude);
        }

        return { latitude, longitude };
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  };

  return <div id="map" ref={mapRef} className="h-[300px] w-full mt-8" />;
};

export default MapComponent;
