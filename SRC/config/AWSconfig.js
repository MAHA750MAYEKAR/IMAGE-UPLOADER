import AWS from 'aws-sdk'

const s3=new AWS.S3({
    region:AWS_REGION,
    accessKeyId:AWS_ACCESS_KEY,
    secretAccessKey:AWS_SECRETE_KEY

})