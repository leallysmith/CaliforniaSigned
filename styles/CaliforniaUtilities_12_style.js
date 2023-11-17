var size = 0;
var placement = 'point';
function categories_CaliforniaUtilities_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'PACIFIC GAS & ELECTRIC CO.':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,137,197,0.6980392156862745)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAN DIEGO GAS & ELECTRIC CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(206,32,67,0.6941176470588235)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SOUTHERN CALIFORNIA EDISON CO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,106,83,0.6901960784313725)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CaliforniaUtilities_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NAME");
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
    
var style = categories_CaliforniaUtilities_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
