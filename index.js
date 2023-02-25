var ExifImage = require('exif').ExifImage;
 
try {
    new ExifImage({ image : 'p1.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
            console.log(exifData.gps.GPSLatitude);
            console.log(exifData.gps.GPSLongitude) // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}