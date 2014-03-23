Gittella
=============

Cause git is good, but let's face it, it's better with chocolate.

[Main site](http://gitella.herokuapp.com)


Run on device
````
cordova run android
````
Run on emulator 
````
cordova emulate android
````
Build App:
````
cordova build

cd platforms/android 
ant release
---> proceed to sign
````

Sign apk 
````
keytool -v -genkey -v -keystore ~/.certs/android_rafinskipg.keystore -alias android_rafinskipg -keyalg RSA -keysize 2048 -validity 100000
`````