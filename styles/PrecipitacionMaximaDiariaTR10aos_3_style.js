var size = 0;
var placement = 'point';

var style_PrecipitacionMaximaDiariaTR10aos_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("P [mm]");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
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
    if (value >= 0.000000 && value <= 40.440000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40.440000 && value <= 54.920000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,221,238,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 54.920000 && value <= 73.440000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(190,186,221,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 73.440000 && value <= 90.670000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,151,204,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 90.670000 && value <= 102.330000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,117,187,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 102.330000 && value <= 117.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(92,82,169,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 117.200000 && value <= 133.520000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(59,47,152,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 133.520000 && value <= 806.470000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(27,12,135,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
