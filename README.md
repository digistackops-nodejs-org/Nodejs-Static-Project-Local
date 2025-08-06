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
git clone https://github.com/techizone-Small-Project-org/Nodejs-Static-Project.git
```
#### Switch to Local-setup Branch
```
cd Nodejs-Static-Project
git checkout Local-setup
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
http://<Your-AWS-Public-IP>:9990/sapsecops
```

To execute Test cases, we will run the below command

```
npm test
```

