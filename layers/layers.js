ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-63.634903, -32.473892, -62.263041, -31.780756]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopomap_2 = new ol.layer.Tile({
            'title': 'OpenTopomap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tr10anios10092022_3 = new ol.format.GeoJSON();
var features_Tr10anios10092022_3 = format_Tr10anios10092022_3.readFeatures(json_Tr10anios10092022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tr10anios10092022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tr10anios10092022_3.addFeatures(features_Tr10anios10092022_3);
var lyr_Tr10anios10092022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tr10anios10092022_3, 
                style: style_Tr10anios10092022_3,
                interactive: true,
    title: 'PMD 10 años<br />\
    <img src="styles/legend/Tr10anios10092022_3_0.png" /> 0 mm - 40 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_1.png" /> 40 mm - 55 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_2.png" /> 55 mm - 73 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_3.png" /> 73 mm - 91 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_4.png" /> 91 mm - 102 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_5.png" /> 102 mm - 117 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_6.png" /> 117 mm - 134 mm<br />\
    <img src="styles/legend/Tr10anios10092022_3_7.png" /> 134 mm - 807 mm<br />'
        });
var format_Isohietas_TR10aos_4 = new ol.format.GeoJSON();
var features_Isohietas_TR10aos_4 = format_Isohietas_TR10aos_4.readFeatures(json_Isohietas_TR10aos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Isohietas_TR10aos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isohietas_TR10aos_4.addFeatures(features_Isohietas_TR10aos_4);
var lyr_Isohietas_TR10aos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isohietas_TR10aos_4, 
                style: style_Isohietas_TR10aos_4,
                interactive: false,
                title: '<img src="styles/legend/Isohietas_TR10aos_4.png" /> Isohietas PMD 10 años'
            });
var format_LimiteProvincial_5 = new ol.format.GeoJSON();
var features_LimiteProvincial_5 = format_LimiteProvincial_5.readFeatures(json_LimiteProvincial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteProvincial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_5.addFeatures(features_LimiteProvincial_5);
var lyr_LimiteProvincial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_5, 
                style: style_LimiteProvincial_5,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_5.png" /> LimiteProvincial'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenTopomap_2.setVisible(false);lyr_Tr10anios10092022_3.setVisible(true);lyr_Isohietas_TR10aos_4.setVisible(true);lyr_LimiteProvincial_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_OpenTopomap_2,lyr_Tr10anios10092022_3,lyr_Isohietas_TR10aos_4,lyr_LimiteProvincial_5];
lyr_Tr10anios10092022_3.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Pr[mm]': 'PMD 10 años [mm]', });
lyr_Isohietas_TR10aos_4.set('fieldAliases', {'P [mm]': 'P [mm]', });
lyr_LimiteProvincial_5.set('fieldAliases', {'gid': 'gid', });
lyr_Tr10anios10092022_3.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Pr[mm]': 'TextEdit', });
lyr_Isohietas_TR10aos_4.set('fieldImages', {'P [mm]': 'Hidden', });
lyr_LimiteProvincial_5.set('fieldImages', {'gid': 'Hidden', });
lyr_Tr10anios10092022_3.set('fieldLabels', {'Latitud': 'inline label', 'Longitud': 'inline label', 'Pr[mm]': 'inline label', });
lyr_Isohietas_TR10aos_4.set('fieldLabels', {});
lyr_LimiteProvincial_5.set('fieldLabels', {});
lyr_LimiteProvincial_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});