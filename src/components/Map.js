import { useContext, useState } from "react"
import { AppContext } from "../helpers/AppContext"
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Pin } from './Pin'
import { AddNewPin } from './AddNewPin'

export const Map = () => {
    const [addNew, setAddNew] = useState(null)

    const { darkMap, setDarkMap, satteliteMap, setSatteliteMap, pins, setPins, showForm, setShowForm, setLat, setLong } = useContext(AppContext)


    const createClusterCustomIcon = function (cluster) {
        return new divIcon({
            html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: [33, 33]
        });
    };

    const MapClick = () => {
        const map = useMapEvents({
            click: (e) => {
                setAddNew({ lat: e.latlng.lat, lng: e.latlng.lng })
                setLat(e.latlng.lat)
                setLong(e.latlng.lng)
                map.locate()
            },
        })
        return null
    }

    return (
        <MapContainer center={[52.237, 21.017]} zoom={12}>
            {satteliteMap ? (<TileLayer
                attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' />) :
                (darkMap ? (<TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                />
                ) : (<TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />))}

            < MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}>
                {pins.map((pin) => (
                    <Pin key={pin._id} pin={pin} />
                ))}
            </MarkerClusterGroup>
            {addNew && <AddNewPin
                pin={addNew} />}
            <MapClick />
        </MapContainer >
    )
}



