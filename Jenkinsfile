pipeline {
    agent any
    environment{
        DOCKER_REGISRTY = 'khaledmahmoud7'
        VERSION = "${BUILD_ID}"
        img = "${DOCKER_REGISRTY}:${VERSION}"
    }
    stages{

        stage('Fetch the Source code'){
            steps{
                //Clone SC from Github
                git branch: 'main', url 'https://github.com/alyaaraffat/HyperMarket.git'
                //List all files of repo
                sh "ls -l"
            } 
        }

        //-------------------------- Without Docker -------------------------------

       /* stage('Install Node.js') {
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
        } */
    // ----------------------------- With Docker ---------------------------------
        
        stage('Build'){
            steps{
                sh "docker build -t ${DOCKER_REGISRTY}/market-react:${BUILD_ID} ."
            }
        }
        
        stage('Run the Container'){
            steps{
                //Run the container
                sh "docker run -d --name market-react -p 3000:3000 ${DOCKER_REGISRTY}/market-react:${BUILD_ID}"
               /* //Excute all commands inside the container
                sh "docker exec -it market-react bash"
                //Run Unit test
                sh "npm test"
                //Exit from container
                sh "exit" */
            }
        }
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
