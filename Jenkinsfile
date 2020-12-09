pipeline {

  environment {
    registry = "172.21.224.24:5000/banqio"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://bitbucket.org/ilayarajan/banqio.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Push Image') {
      steps{
        script {
          docker.withRegistry( "" ) {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy App') {
      steps {
        script {
          kubernetesDeploy(configs: "banqio.yml", kubeconfigId: "KUBE_CONFIG")
        }
      }
    }

  }

}
