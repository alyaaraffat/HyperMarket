pipeline {
    agent any
    environment{
        DOCKER_REGISRTY = 'khaledmahmoud7'
        VERSION = "${BUILD_ID}"
        img = "${DOCKER_REGISRTY}:${VERSION}"
    }
    stages{

        stage('Fetch the Source code'){
            //Clone SC from Github
            git branch: 'main', url 'https://github.com/alyaaraffat/HyperMarket.git'
        }

        //-------------------------- Without Docker -------------------------------

        stage('Install Node.js') {
            steps {
                // Install Node.js and npm on the Jenkins agent if necessary
                sh '''
                    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | sudo -E bash -
                    sudo apt-get install -y nodejs
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies using npm or yarn
                sh 'npm install'
            }
        }

        stage('Unit Test') {
            steps {
                // Run tests using npm or yarn
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Build the React app for production
                sh 'npm run build'
            }
        }
    // ----------------------------- With Docker ---------------------------------
        /*{
            Waiting to dockerize React app
        }*/
    }

    post {
        always {
            // Notify the Result of my pipeline
            echo 'Pipeline completed'
        }
        success {
            echo 'Build and tests were successful'
        }
        failure {
            echo 'Build or tests failed'
        }
    }
}