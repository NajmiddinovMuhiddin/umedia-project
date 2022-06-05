import React from 'react';
import {Placemark, Map, YMaps, ZoomControl} from "react-yandex-maps";

const MyMap = () => {
    return (
            <YMaps
                query={{
                    ns: 'use-load-option',
                    load:
                        'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}
            >

                <Map defaultState={{
                    center: [41.311151, 69.279716],
                    zoom: 9,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                     modules={['control.ZoomControl', 'control.FullscreenControl']}
                     width={'100%'}
                     height={'650px'}
                >
                    <ZoomControl options={{float: 'right'}}/>
                    <Placemark geometry={[41.322183, 69.261654]}
                               properties={{
                                   balloonContentBody:
                                       'This is balloon loaded by the Yandex.Maps API module system',
                               }}
                    />
                </Map>

            </YMaps>
    );
};

export default MyMap;