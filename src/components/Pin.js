import React from 'react'
import BicycleImg from '../images/bicycle.png'
import RunImg from '../images/run.png'
import GymImg from '../images/gym.png'
import OtherImg from '../images/other.png'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const bikeIcon = new Icon({
    iconUrl: BicycleImg,
    iconSize: [38, 38]
})
const runIcon = new Icon({
    iconUrl: RunImg,
    iconSize: [38, 38]
})
const gymIcon = new Icon({
    iconUrl: GymImg,
    iconSize: [38, 38]
})
const otherIcon = new Icon({
    iconUrl: OtherImg,
    iconSize: [38, 38]
})

export const Pin = ({ pin }) => {

    let customIcon = otherIcon

    if (pin.sport === 'running') {
        customIcon = runIcon
    }
    if (pin.sport === 'bike') {
        customIcon = bikeIcon
    }
    if (pin.sport === 'gym') {
        customIcon = gymIcon
    }


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
        </div >
    )
}
