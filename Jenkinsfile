pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'payrixonboarding-api-v1.dashboard'
        DESTINATION_FOLDER = '/var/www/dev.paid.com.jenkins'
        DOCKER_CONTAINER = 'payrixonboarding-container'
        // DESTINATION_FOLDER = '/D/test'
    }
    
    stages {
        stage('Build React App') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        
        stage('Run Docker Image') {
            steps {
                sh "docker rm -f ${DOCKER_CONTAINER}"
                sh "docker run -d --cpus='.5' --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}"
            }
        }
        // stage('Run Docker Image') {
        //     steps {
        //         // Run the Docker container outside the pipeline
        //         script {
        //             sh "docker run -d -p 80:80 --name ${DOCKER_CONTAINER} ${DOCKER_IMAGE}"
        //         }
        //     }
        // }

        // stage('Transfer Build') {
        //     steps {
        //         mkdir "${DESTINATION_FOLDER}"
        //         sh "docker cp ${DOCKER_IMAGE}:/app/build ${DESTINATION_FOLDER}"
        //     }
        // }
         stage('Transfer Build') {
            steps {
                // Copy files from the running container to the destination folder
                sh "docker cp ${DOCKER_CONTAINER}:/app/build ${DESTINATION_FOLDER}"
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
