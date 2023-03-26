pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker-compose build'
      }
    }
    stage('Start Services') {
      steps {
        sh 'docker-compose up -d'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'docker-compose exec playwright npm run test'
      }
    }
    stage('Stop Services') {
      steps {
        sh 'docker-compose down'
      }
    }
  }
}
