<%_ if (options.needTravisBuild) { _%>
#!/bin/bash

echo "TRAVIS_BUILD_ID=$TRAVIS_BUILD_ID"

# export BUILD_TIME=$(date +"%s")
export BUILD_TIME=$TRAVIS_BUILD_ID
echo "BUILD_TIME=$BUILD_TIME"

export NODE_ENV=production
echo "NODE_ENV=$NODE_ENV"

export CAN_DEPLOY=false

if [[ ${TRAVIS_BRANCH} == 'testing' ]]; then
  export CAN_DEPLOY=true

  export AWS_ACCESS_KEY_ID=$dev_access_key_id
  export AWS_SECRET_ACCESS_KEY=$dev_secret_access_key
  export static_bucket='static_bucket_name'
  export NODE_ENV='development'

elif [[ ${TRAVIS_BRANCH} == 'develop' ]]; then
  export CAN_DEPLOY=true

  export AWS_ACCESS_KEY_ID=$dev_access_key_id
  export AWS_SECRET_ACCESS_KEY=$dev_secret_access_key
  export static_bucket='static_bucket_name'
  export NODE_ENV='development'

elif [[ ${TRAVIS_BRANCH} == 'staging' ]]; then
  export CAN_DEPLOY=true

  export AWS_ACCESS_KEY_ID=$stg_access_key_id
  export AWS_SECRET_ACCESS_KEY=$stg_secret_access_key
  export static_bucket='static_bucket_name'
  export NODE_ENV='staging'

elif [[ ${TRAVIS_BRANCH} == 'production' ]]; then
  export CAN_DEPLOY=true

  export AWS_ACCESS_KEY_ID=$prod_access_key_id
  export AWS_SECRET_ACCESS_KEY=$prod_secret_access_key
  export static_bucket='static_bucket_name'
  export NODE_ENV='production'

fi
<%_ } _%>