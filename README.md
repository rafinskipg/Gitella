Gittella
=============

Cause git is good, but let's face it, it's better with chocolate.


[Main site](http://www.gitella.com)

Tips for bash
http://code-worrier.com/blog/git-branch-in-bash-prompt/

Edit .bashrc
Add to PS1: 
$(__git_ps1)

#Add git support for modified files
GIT_PS1_SHOWDIRTYSTATE=1
color_prompt=yes


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

