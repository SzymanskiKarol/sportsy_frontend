import React from 'react'
import BicycleImg from '../images/bicycle.png'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const customIcon = new Icon({
    iconUrl: BicycleImg,
    iconSize: [38, 38]
})

export const Pin = ({ pin }) => {
    return (
        <div className="pin">
            <Marker position={[pin.lat, pin.long]} icon={customIcon}>
                <Popup>
                    {<div>
                        <h2>{pin.title}</h2>
                        <p>{pin.desc}</p>
                        <p>Created by: {pin.username}</p>
                    </div>}
                </Popup>
            </Marker>
        </div>
    )
}
