var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 0.251000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_net2_1 = new ol.format.GeoJSON();
var features_net2_1 = format_net2_1.readFeatures(json_net2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_net2_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_net2_1.addFeatures(features_net2_1);var lyr_net2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_net2_1, 
                style: style_net2_1,
                title: '<img src="styles/legend/net2_1.png" /> net2'
            });var format_nodes_2 = new ol.format.GeoJSON();
var features_nodes_2 = format_nodes_2.readFeatures(json_nodes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nodes_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_nodes_2.addFeatures(features_nodes_2);var lyr_nodes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nodes_2,
maxResolution:8.22183121764259,
 
                style: style_nodes_2,
                title: '<img src="styles/legend/nodes_2.png" /> nodes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_net2_1.setVisible(true);lyr_nodes_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_net2_1,lyr_nodes_2];
lyr_net2_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_name': 'osm_name', 'source': 'source', 'target': 'target', 'cost': 'cost', 'reverse_cost': 'reverse_cost', 'kmh': 'kmh', 'label': 'label', });
lyr_nodes_2.set('fieldAliases', {'nodeid': 'nodeid', });
lyr_net2_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_name': 'TextEdit', 'source': 'Range', 'target': 'Range', 'cost': 'TextEdit', 'reverse_cost': 'TextEdit', 'kmh': 'Range', 'label': 'TextEdit', });
lyr_nodes_2.set('fieldImages', {'nodeid': 'Range', });
lyr_net2_1.set('fieldLabels', {'osm_id': 'inline label', 'osm_name': 'inline label', 'source': 'inline label', 'target': 'inline label', 'cost': 'inline label', 'reverse_cost': 'inline label', 'kmh': 'inline label', 'label': 'inline label', });
lyr_nodes_2.set('fieldLabels', {'nodeid': 'no label', });
lyr_nodes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});