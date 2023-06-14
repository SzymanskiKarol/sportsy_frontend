import { AppContext } from "../helpers/AppContext"
import React, { useContext, useState } from 'react'
import AddLocationImg from '../images/addlocation.png'
import { Marker, Popup, Tooltip } from 'react-leaflet'
import { Icon, Point } from 'leaflet'

const customIcon = new Icon({
    iconUrl: AddLocationImg,
    iconSize: [45, 45]
})


export const AddNewPin = ({ pin }) => {
    const { showForm, setShowForm } = useContext(AppContext)
    // const [markerVisible, setMarkerVisible] = useState(false)



    return (
        <div className="pin">
            <Marker isActive eventHandlers={{
                click: (e) => {
                    console.log('marker clicked', e)
                    setShowForm(!showForm)
                },
            }} position={[pin.lat, pin.lng]} icon={customIcon}>
                <Tooltip offset={[0, -20]} direction="top" permanent>
                    <div>
                        <p>Click me to add new pin here</p>
                    </div>
                </Tooltip>

            </Marker>
        </div>
    )
}
