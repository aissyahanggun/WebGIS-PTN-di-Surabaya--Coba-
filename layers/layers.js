ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_1_2.png" /> <br />' });
var format_PTNDISURABAYA2_2 = new ol.format.GeoJSON();
var features_PTNDISURABAYA2_2 = format_PTNDISURABAYA2_2.readFeatures(json_PTNDISURABAYA2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNDISURABAYA2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNDISURABAYA2_2.addFeatures(features_PTNDISURABAYA2_2);
var lyr_PTNDISURABAYA2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNDISURABAYA2_2, 
                style: style_PTNDISURABAYA2_2,
                popuplayertitle: 'PTN DI SURABAYA (2)',
                interactive: true,
    title: 'PTN DI SURABAYA (2)<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTNDISURABAYA2_2_9.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_PTNDISURABAYA2_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_aksesibilitas_univunion_1,lyr_PTNDISURABAYA2_2];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNDISURABAYA2_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Didirikan': 'Tahun Didirikan', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNDISURABAYA2_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Didirikan': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - visible with data', });
lyr_PTNDISURABAYA2_2.set('fieldLabels', {'fid': 'header label - visible with data', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', 'Tahun Didirikan': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNDISURABAYA2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});