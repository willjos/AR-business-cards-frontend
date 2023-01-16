# AR-business-cards-frontend
Frontend repo for the W11-W12 group project

# How to run this project

## Prerequisites
- You will require an android phone, emulators will not work with AR, IOS is currently not supported.
- Java should be installed on your machine.
- Android studio should be installed on your machine.
- wWthin android studio, you should also have the Cmake plugin installed and updated.
- You will need a cable to connect your phone to the computer.

1. Clone this repo 
```
git clone https://github.com/willjos/AR-business-cards-frontend.git
```
2. Make a local.properties file in the project
This should be within the android folder.
``` 
touch android/local.properties 
```
3. Inside the local.properties file, specify the path for the android SDK location
    For macOS users(USERNAME is your OSX username):
    ```
    sdk.dir = /Users/<USERNAME>/Library/Android/sdk
    ```
    For windows users(USERNAME is your PC username):
    ```
    sdk.dir=C:\\Users\\UserName\\AppData\\Local\\Android\\sdk
    ```
    For linux users(USERNAME is your linux username):
    ```
    sdk.dir = /home/USERNAME/Android/Sdk
    ```
