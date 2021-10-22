
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSM_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "WorldMap_1": {
            "type": "geojson",
            "data": json_WorldMap_1
        }
                    ,
        "Hackfests_2": {
            "type": "geojson",
            "data": json_Hackfests_2
        }
                    ,
        "Contributors_3": {
            "type": "geojson",
            "data": json_Contributors_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSM_0_0",
            "type": "raster",
            "source": "OSM_0"
        },
        {
            "id": "lyr_WorldMap_1_0",
            "type": "fill",
            "source": "WorldMap_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e0dcca'}
        }
,
        {
            "id": "lyr_Hackfests_2_0",
            "type": "circle",
            "source": "Hackfests_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#487bb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#325780'}
        }
,
        {
            "id": "lyr_Contributors_3_0",
            "type": "circle",
            "source": "Contributors_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#54b04a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#3d8035'}
        }
],
}