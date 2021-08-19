<%_ if (options.needTravisBuild) { _%>
#!/bin/bash

if [[ ${TRAVIS_BRANCH} == 'testing' ]]; then

  aws s3 rm s3://$static_bucket/ --recursive --exclude "log/*"

elif [[ ${TRAVIS_BRANCH} == 'develop' ]]; then

  aws s3 rm s3://$static_bucket/ --recursive --exclude "log/*"

elif [[ ${TRAVIS_BRANCH} == 'staging' ]]; then

  aws s3 rm s3://$static_bucket/ --recursive --exclude "log/*"

elif [[ ${TRAVIS_BRANCH} == 'production' ]]; then

  aws s3 rm s3://$static_bucket/ --recursive --exclude "log/*"

fi
<%_ } _%>