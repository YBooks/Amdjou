var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LOT_PRIVE_1 = new ol.format.GeoJSON();
var features_LOT_PRIVE_1 = format_LOT_PRIVE_1.readFeatures(json_LOT_PRIVE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT_PRIVE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT_PRIVE_1.addFeatures(features_LOT_PRIVE_1);
var lyr_LOT_PRIVE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOT_PRIVE_1, 
                style: style_LOT_PRIVE_1,
                interactive: true,
                title: '<img src="styles/legend/LOT_PRIVE_1.png" /> LOT_PRIVE'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_LOT_PRIVE_1,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_LOT_PRIVE_1.setVisible(true);
var layersList = [group_group1];
lyr_LOT_PRIVE_1.set('fieldAliases', {'id': 'id', 'Nom LOT': 'Nom LOT', 'Promoteur': 'Promoteur', 'Livraison': 'Livraison', });
lyr_LOT_PRIVE_1.set('fieldImages', {'id': 'TextEdit', 'Nom LOT': 'TextEdit', 'Promoteur': 'TextEdit', 'Livraison': 'DateTime', });
lyr_LOT_PRIVE_1.set('fieldLabels', {});
lyr_LOT_PRIVE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});