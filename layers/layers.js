var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ghanadistricts_1 = new ol.format.GeoJSON();
var features_ghanadistricts_1 = format_ghanadistricts_1.readFeatures(json_ghanadistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ghanadistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ghanadistricts_1.addFeatures(features_ghanadistricts_1);
var lyr_ghanadistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ghanadistricts_1, 
                style: style_ghanadistricts_1,
                popuplayertitle: 'ghana-districts',
                interactive: true,
                title: '<img src="styles/legend/ghanadistricts_1.png" /> ghana-districts'
            });
var format_GhanaPhase1Locations_2 = new ol.format.GeoJSON();
var features_GhanaPhase1Locations_2 = format_GhanaPhase1Locations_2.readFeatures(json_GhanaPhase1Locations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GhanaPhase1Locations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GhanaPhase1Locations_2.addFeatures(features_GhanaPhase1Locations_2);
var lyr_GhanaPhase1Locations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GhanaPhase1Locations_2, 
                style: style_GhanaPhase1Locations_2,
                popuplayertitle: 'Ghana - Phase 1 Locations',
                interactive: true,
                title: '<img src="styles/legend/GhanaPhase1Locations_2.png" /> Ghana - Phase 1 Locations'
            });
var format_planned_3 = new ol.format.GeoJSON();
var features_planned_3 = format_planned_3.readFeatures(json_planned_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_planned_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_planned_3.addFeatures(features_planned_3);
var lyr_planned_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_planned_3, 
                style: style_planned_3,
                popuplayertitle: 'planned',
                interactive: true,
    title: 'planned<br />\
    <img src="styles/legend/planned_3_0.png" /> 6 Racks<br />\
    <img src="styles/legend/planned_3_1.png" /> 12 Racks<br />\
    <img src="styles/legend/planned_3_2.png" /> <br />' });
var format_AllLocations_4 = new ol.format.GeoJSON();
var features_AllLocations_4 = format_AllLocations_4.readFeatures(json_AllLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllLocations_4.addFeatures(features_AllLocations_4);
var lyr_AllLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllLocations_4, 
                style: style_AllLocations_4,
                popuplayertitle: 'All Locations',
                interactive: true,
                title: '<img src="styles/legend/AllLocations_4.png" /> All Locations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ghanadistricts_1.setVisible(true);lyr_GhanaPhase1Locations_2.setVisible(true);lyr_planned_3.setVisible(true);lyr_AllLocations_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ghanadistricts_1,lyr_GhanaPhase1Locations_2,lyr_planned_3,lyr_AllLocations_4];
lyr_ghanadistricts_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm1_name': 'adm1_name', });
lyr_GhanaPhase1Locations_2.set('fieldAliases', {'fid': 'fid', 'Swap locations': 'Swap locations', 'Phase': 'Phase', 'Cordinates': 'Cordinates', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', });
lyr_planned_3.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', });
lyr_AllLocations_4.set('fieldAliases', {'Tier': 'Tier', 'Location': 'Location', 'Category': 'Category', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Why It Matters': 'Why It Matters', });
lyr_ghanadistricts_1.set('fieldImages', {'fid': '', 'adm2_name': 'TextEdit', 'adm1_name': 'TextEdit', });
lyr_GhanaPhase1Locations_2.set('fieldImages', {'fid': '', 'Swap locations': 'TextEdit', 'Phase': 'TextEdit', 'Cordinates': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', });
lyr_planned_3.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', });
lyr_AllLocations_4.set('fieldImages', {'Tier': 'TextEdit', 'Location': 'TextEdit', 'Category': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Why It Matters': 'TextEdit', });
lyr_ghanadistricts_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'inline label - always visible', 'adm1_name': 'no label', });
lyr_GhanaPhase1Locations_2.set('fieldLabels', {'fid': 'no label', 'Swap locations': 'no label', 'Phase': 'no label', 'Cordinates': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', });
lyr_planned_3.set('fieldLabels', {'fid': 'no label', 'Type': 'inline label - always visible', });
lyr_AllLocations_4.set('fieldLabels', {'Tier': 'no label', 'Location': 'no label', 'Category': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Why It Matters': 'no label', });
lyr_AllLocations_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});