var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WorldMap_1 = new ol.format.GeoJSON();
var features_WorldMap_1 = format_WorldMap_1.readFeatures(json_WorldMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_1.addFeatures(features_WorldMap_1);
var lyr_WorldMap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_1, 
                style: style_WorldMap_1,
                interactive: true,
                title: '<img src="styles/legend/WorldMap_1.png" /> World Map'
            });
var format_Hackfests_2 = new ol.format.GeoJSON();
var features_Hackfests_2 = format_Hackfests_2.readFeatures(json_Hackfests_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hackfests_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hackfests_2.addFeatures(features_Hackfests_2);cluster_Hackfests_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hackfests_2
});
var lyr_Hackfests_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Hackfests_2, 
                style: style_Hackfests_2,
                interactive: true,
                title: '<img src="styles/legend/Hackfests_2.png" /> Hackfests'
            });
var format_Contributors_3 = new ol.format.GeoJSON();
var features_Contributors_3 = format_Contributors_3.readFeatures(json_Contributors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contributors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contributors_3.addFeatures(features_Contributors_3);cluster_Contributors_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Contributors_3
});
var lyr_Contributors_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Contributors_3, 
                style: style_Contributors_3,
                interactive: true,
                title: '<img src="styles/legend/Contributors_3.png" /> Contributors'
            });

lyr_OSM_0.setVisible(true);lyr_WorldMap_1.setVisible(true);lyr_Hackfests_2.setVisible(true);lyr_Contributors_3.setVisible(true);
var layersList = [lyr_OSM_0,lyr_WorldMap_1,lyr_Hackfests_2,lyr_Contributors_3];
lyr_WorldMap_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Hackfests_2.set('fieldAliases', {'year': 'year', 'month': 'month', 'hackfest_number': 'hackfest_number', 'place': 'place', 'notes': 'notes', 'month_int': 'month_int', 'day_int': 'day_int', 'date_nice': 'date_nice', });
lyr_Contributors_3.set('fieldAliases', {'Name': 'Name', 'Committer': 'Committer', 'First Commit Message': 'First Commit Message', 'First Commit Date': 'First Commit Date', 'GIT Nickname': 'GIT Nickname', });
lyr_WorldMap_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Hackfests_2.set('fieldImages', {'year': 'Range', 'month': 'TextEdit', 'hackfest_number': 'TextEdit', 'place': 'TextEdit', 'notes': 'TextEdit', 'month_int': 'Range', 'day_int': 'Range', 'date_nice': 'DateTime', });
lyr_Contributors_3.set('fieldImages', {'Name': 'TextEdit', 'Committer': 'TextEdit', 'First Commit Message': 'TextEdit', 'First Commit Date': 'TextEdit', 'GIT Nickname': 'TextEdit', });
lyr_WorldMap_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Hackfests_2.set('fieldLabels', {'year': 'no label', 'month': 'no label', 'hackfest_number': 'no label', 'place': 'no label', 'notes': 'no label', 'month_int': 'no label', 'day_int': 'no label', 'date_nice': 'no label', });
lyr_Contributors_3.set('fieldLabels', {'Name': 'no label', 'Committer': 'no label', 'First Commit Message': 'no label', 'First Commit Date': 'no label', 'GIT Nickname': 'no label', });
lyr_Contributors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});