import React, { useContext } from 'react'
import { AppContext } from "../helpers/AppContext"
import AddLocationImg from '../images/addlocation.png'
import { Marker, Tooltip } from 'react-leaflet'
import { Icon } from 'leaflet'

const customIcon = new Icon({
    iconUrl: AddLocationImg,
    iconSize: [45, 45]
})


export const AddNewPin = ({ pin }) => {
    const { showForm, setShowForm } = useContext(AppContext)

    return (
        <div className="pin">
            <Marker isActive eventHandlers={{
                click: (e) => {
                    console.log('marker clicked', e)
                    setShowForm(!showForm)
                },
            }} position={[pin.lat, pin.lng]} icon={customIcon}>
                <Tooltip permanent>
                    <h1>Click me to add new</h1>
                </Tooltip>
            </Marker>
        </div>
    )
}
