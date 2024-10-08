## Setup Installations:

Initially I installed vs code.</br>
Then installed git and cloned my repository.</br>
I choose nodeJs and ExpressJs to create the microservices.</br>
So I used commands like ` npm init -y ` to initialize the project and did installations using ` npm install express `
` npm install axios ` </br>
Then installed docker and chose minikube for kubernates and installed it.</br>
I installed minikube using</br>
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" ```
& 
```brew install minikube```

**Cloned my git repo to vs code and used nodeJs and ExpressJs for creating two microservices**

## Hello-service
Created hello-service which returns a simple Hello message. </br>
Here the endpoint is /hello and returns “Hello” string. </br>
Created a dockerfile for this microservice and built the docker image. </br>
I used the commands as follows:
### Build the Docker image:
``` docker build -t vineelam23/hello-service:latest . ```
### Run the Docker container locally:
``` docker run -p 3000:3000 vineelam23/hello-service:latest ```

### Test the service locally: To access the service in the browser or via curl:
``` curl http://localhost:3000/hello ```
Or 
In browser the result is as follows:
![hello-1](images/hello-1.png)

### Pushed to Docker Hub: 
I used following commands to push
``` docker login ``` 
``` docker push vineelam23/hello-service:latest ```

Then deployment in kubernetes is done for this service 
The code is in the file hello-service.yaml

Used commands like:
``` minikube start ```
``` kubectl apply -f hello-service.yaml ```
Then check the kubernetes service is running or not:
``` minikube service hello-service ```

The output is:
![hello-2](images/hello-2.png)
![hello-3](images/hello-3.png)

## World-service
Also Created a world-service which returns a simple World message. </br>
The endpoint here is /world and uses port as 3001 and returns “World” as a string in the browser. </br>
Created dockerfile and also built the docker image and pushed to docker hub. </br>
Here is the link for created docker images in docker hub. </br>


I used the commands like 
### Build the Docker image:
``` docker build -t vineelam23/world-service:latest . ```
### Run the Docker container locally:
``` docker run -p 3001:3000 vineelam23/world-service:latest ```

### Test the service locally: To access the service in the browser or via curl:
``` curl http://localhost:3001/world ```

Also checked if the service was running locally or not.</br>
Below is the image for the test of the service locally. </br>

![world-1](images/world-1.png)

### Pushed to Docker Hub: 
``` docker push vineelam23/world-service:latest ```

Then deployment in kubernetes is done for this world service. </br>
Used minikube for kubernetes cluster setup and deployment. </br>
The code is in the file world-service.yaml </br>

Used commands like:
``` minikube start ```
``` kubectl apply -f world-service.yaml ```
Then check if the kubernetes service is running or not using the below command.
``` minikube service world-service ```

Output is:
![world-2](images/world-2.png)
![world-3](images/world-3.png)

Both the services are running successfully in kubernetes setup. </br>

And then created a simple service which calls both the endpoints and prints “Hello World” if both the services respond correctly. </br>
I created a service named combined-service and containerized with docker and then deployed this service using kubernetes similarly. </br>

Here are the commands used and the test result for the combined script. 
``` docker build -t vineelam23/combined-service:latest . ```
``` docker push vineelam23/combined-service:latest ```

### Used commands like:
``` kubectl get pods```
```kubectl get service```
``` kubectl get deployment ```

### Used to apply configuration:
``` kubectl apply -f combined-service.yaml ```
### Used to test the service:
``` minikube service combined-service ```

The images below show the test results
![cs-1](images/cs-1.png)
![cs-2](images/cs-2.png)


The docker hub links for the created docker images are:
``` https://hub.docker.com/repository/docker/vineelam23/hello-service ```
``` https://hub.docker.com/repository/docker/vineelam23/world-service  ```
``` https://hub.docker.com/repository/docker/vineelam23/combined-service ```