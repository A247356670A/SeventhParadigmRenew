# SeventhParadigmRenew
The purpose of this app is to help people protect the environment. It will collect product infomration through scanning QR code.
## Step: 0 git setting
https://www.jianshu.com/p/c70ca3a02087 
## Step: 1 environment-setup
https://docs.expo.io/

https://reactnative.dev/docs/environment-setup 
## Step: 2 install expo
npm install --global expo-cli
## Step: 3 install package
npm rm -rf node_modules && npm install
## Run (android only)
expo start

1.For android simulator download And install Android (Q) environment;

2.For Android phone (highly recommend!), download expo app and scan the code after expo start. OR,
On the android device copy exp://exp.host/@lempletree/SeventhParadigmRenew and open in expo app.

## icon problem

npm install --save react-native-vector-icons // 下载库

react-native link react-native-vector-icons // 自动关联

## possible error 1:

 Could not initialize class org.codehaus.groovy.reflection.ReflectionCacherr
 
https://stackoverflow.com/questions/60844245/how-solve-could-not-initialize-class-org-codehaus-groovy-reflection-reflectionc

## Firebase 安装环境
## Install & setup the app module
yarn add @react-native-firebase/app

## Install the database module
yarn add @react-native-firebase/database
