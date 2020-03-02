var wms_layers = [];

var format_MANZANAS_Geo_0 = new ol.format.GeoJSON();
var features_MANZANAS_Geo_0 = format_MANZANAS_Geo_0.readFeatures(json_MANZANAS_Geo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_Geo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_Geo_0.addFeatures(features_MANZANAS_Geo_0);
var lyr_MANZANAS_Geo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_Geo_0, 
                style: style_MANZANAS_Geo_0,
                interactive: true,
                title: '<img src="styles/legend/MANZANAS_Geo_0.png" /> MANZANAS_Geo'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOTESgeo_2 = new ol.format.GeoJSON();
var features_LOTESgeo_2 = format_LOTESgeo_2.readFeatures(json_LOTESgeo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTESgeo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTESgeo_2.addFeatures(features_LOTESgeo_2);
var lyr_LOTESgeo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTESgeo_2, 
                style: style_LOTESgeo_2,
                interactive: true,
                title: '<img src="styles/legend/LOTESgeo_2.png" /> LOTESgeo'
            });
var format_Postesok_3 = new ol.format.GeoJSON();
var features_Postesok_3 = format_Postesok_3.readFeatures(json_Postesok_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postesok_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postesok_3.addFeatures(features_Postesok_3);
var lyr_Postesok_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Postesok_3, 
                style: style_Postesok_3,
                interactive: true,
                title: '<img src="styles/legend/Postesok_3.png" /> Postesok'
            });
var format_VIASgeo_4 = new ol.format.GeoJSON();
var features_VIASgeo_4 = format_VIASgeo_4.readFeatures(json_VIASgeo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIASgeo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIASgeo_4.addFeatures(features_VIASgeo_4);
var lyr_VIASgeo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIASgeo_4, 
                style: style_VIASgeo_4,
                interactive: true,
                title: '<img src="styles/legend/VIASgeo_4.png" /> VIASgeo'
            });

lyr_MANZANAS_Geo_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LOTESgeo_2.setVisible(true);lyr_Postesok_3.setVisible(true);lyr_VIASgeo_4.setVisible(true);
var layersList = [lyr_MANZANAS_Geo_0,lyr_OpenStreetMap_1,lyr_LOTESgeo_2,lyr_Postesok_3,lyr_VIASgeo_4];
lyr_MANZANAS_Geo_0.set('fieldAliases', {'FID_1': 'FID_1', 'MZ_URB': 'MZ_URB', 'NOMBRE_AAH': 'NOMBRE_AAH', 'DISTRITO': 'DISTRITO', });
lyr_LOTESgeo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LOTE_URB': 'LOTE_URB', 'NUM_PARTID': 'NUM_PARTID', 'MZ_URB': 'MZ_URB', 'DISTRITO': 'DISTRITO', 'TITULAR': 'TITULAR', 'SECTORIZAC': 'SECTORIZAC', 'DIRECCION': 'DIRECCION', 'ORIGEN': 'ORIGEN', 'COD_CATAST': 'COD_CATAST', 'AÃ‘O_TITUL': 'AÃ‘O_TITUL', 'NUM_TITULO': 'NUM_TITULO', 'USO': 'USO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Postesok_3.set('fieldAliases', {'objectid': 'objectid', 'globalid': 'globalid', 'tdep': 'tdep', 'tprov': 'tprov', 'tdist': 'tdist', 'codigo': 'codigo', 'propietari': 'propietari', 'estado': 'estado', 'tipo': 'tipo', 'tipos': 'tipos', 'encuestado': 'encuestado', 'dni': 'dni', 'fecha': 'fecha', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_VIASgeo_4.set('fieldAliases', {'__gid': '__gid', 'tipo_diagn': 'tipo_diagn', 'nombre_dia': 'nombre_dia', 'nomenclatu': 'nomenclatu', 'cod_actual': 'cod_actual', 'nombre_act': 'nombre_act', 'cod_propue': 'cod_propue', 'nombre_pro': 'nombre_pro', 'distrito': 'distrito', 'observacio': 'observacio', });
lyr_MANZANAS_Geo_0.set('fieldImages', {'FID_1': 'TextEdit', 'MZ_URB': 'TextEdit', 'NOMBRE_AAH': 'TextEdit', 'DISTRITO': 'TextEdit', });
lyr_LOTESgeo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LOTE_URB': 'TextEdit', 'NUM_PARTID': 'TextEdit', 'MZ_URB': 'TextEdit', 'DISTRITO': 'TextEdit', 'TITULAR': 'TextEdit', 'SECTORIZAC': 'TextEdit', 'DIRECCION': 'TextEdit', 'ORIGEN': 'TextEdit', 'COD_CATAST': 'TextEdit', 'AÃ‘O_TITUL': 'DateTime', 'NUM_TITULO': 'TextEdit', 'USO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Postesok_3.set('fieldImages', {'objectid': 'TextEdit', 'globalid': 'TextEdit', 'tdep': 'TextEdit', 'tprov': 'TextEdit', 'tdist': 'TextEdit', 'codigo': 'TextEdit', 'propietari': 'TextEdit', 'estado': 'TextEdit', 'tipo': 'TextEdit', 'tipos': 'TextEdit', 'encuestado': 'TextEdit', 'dni': 'TextEdit', 'fecha': 'DateTime', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', });
lyr_VIASgeo_4.set('fieldImages', {'__gid': 'TextEdit', 'tipo_diagn': 'TextEdit', 'nombre_dia': 'TextEdit', 'nomenclatu': 'TextEdit', 'cod_actual': 'TextEdit', 'nombre_act': 'TextEdit', 'cod_propue': 'TextEdit', 'nombre_pro': 'TextEdit', 'distrito': 'TextEdit', 'observacio': 'TextEdit', });
lyr_MANZANAS_Geo_0.set('fieldLabels', {'FID_1': 'no label', 'MZ_URB': 'header label', 'NOMBRE_AAH': 'no label', 'DISTRITO': 'no label', });
lyr_LOTESgeo_2.set('fieldLabels', {'OBJECTID': 'no label', 'LOTE_URB': 'header label', 'NUM_PARTID': 'no label', 'MZ_URB': 'no label', 'DISTRITO': 'no label', 'TITULAR': 'no label', 'SECTORIZAC': 'no label', 'DIRECCION': 'no label', 'ORIGEN': 'no label', 'COD_CATAST': 'no label', 'AÃ‘O_TITUL': 'no label', 'NUM_TITULO': 'no label', 'USO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Postesok_3.set('fieldLabels', {'objectid': 'no label', 'globalid': 'no label', 'tdep': 'no label', 'tprov': 'no label', 'tdist': 'no label', 'codigo': 'no label', 'propietari': 'no label', 'estado': 'no label', 'tipo': 'no label', 'tipos': 'no label', 'encuestado': 'no label', 'dni': 'no label', 'fecha': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_VIASgeo_4.set('fieldLabels', {'__gid': 'no label', 'tipo_diagn': 'no label', 'nombre_dia': 'no label', 'nomenclatu': 'no label', 'cod_actual': 'no label', 'nombre_act': 'header label', 'cod_propue': 'no label', 'nombre_pro': 'no label', 'distrito': 'no label', 'observacio': 'no label', });
lyr_VIASgeo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});