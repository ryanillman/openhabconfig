(function(jsonstring){
    data = JSON.parse(jsonstring);
    if (data['_type'] == 'location'){
        return data.lat + ',' + data.lon + ',' + data.alt;
    }
    return null;
})(input);