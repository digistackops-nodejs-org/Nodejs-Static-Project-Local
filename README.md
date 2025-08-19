# nodejs-app-Nexus-LAB
Launch EC2 "t2.micro" Instance and Open port "9990" in Security Group

## Install Node
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16
```
### Check Node Version
```
node -v
npm -v
```
## Install Git
```
sudo yum install git -y
```
### To start this application first you can get this repo code using below url
#### Clone the Repo
```
git clone https://github.com/digistackops-nodejs-org/Nodejs-Static-Project-Local.git
```
#### Switch to Local-setup Branch
```
cd Nodejs-Static-Project-Local
git checkout 01-Local-setup
```
#### Download the Dependencies
```
npm install
```
#### Start the Application
```
node app.js
```
#### Access Your Application in Browser
```
http://<Your-AWS-Public-IP>:9990/digistack
```
<img width="637" height="410" alt="image" src="https://github.com/user-attachments/assets/381cfdfc-f758-45e6-af8b-ddac5221e91a" />



To execute Test cases, we will run the below command

```
npm test
```

