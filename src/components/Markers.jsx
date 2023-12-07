import React from 'react'
import { Marker } from 'react-leaflet'
import {IconLocation} from './IconLocation'


export const Markers = () => {
  return (
    <Marker position={{lat: '4.5422715', lng: '-75.6805496'}} icon={IconLocation}/>
  )
}


