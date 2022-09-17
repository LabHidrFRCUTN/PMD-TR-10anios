var size = 0;
var placement = 'point';

var style_Tr10anios10092022_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Pr[mm]");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 40.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40.400000 && value <= 54.900000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,234,247,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 54.900000 && value <= 73.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,216,237,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 73.400000 && value <= 90.700000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(143,194,222,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 90.700000 && value <= 102.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(91,163,208,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 102.300000 && value <= 117.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(49,130,190,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 117.200000 && value <= 133.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(16,92,165,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 133.500000 && value <= 806.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
