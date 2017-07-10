aws kms encrypt --key-id arn:aws:kms:eu-west-1:248598588267:key/0c52233a-6d6b-4ceb-a59d-21c09833efaa --plaintext fileb://secrets.edn --output text --query CiphertextBlob --profile aki-iam
