<%_ if (options.needTravisBuild) { _%>
if [[ ${TRAVIS_BRANCH} == 'testing' ]]; then

  aws cloudfront create-invalidation --distribution-id $dev_cdn_id --paths "/*"

elif [[ ${TRAVIS_BRANCH} == 'develop' ]]; then

  aws cloudfront create-invalidation --distribution-id $dev_cdn_id --paths "/*"

elif [[ ${TRAVIS_BRANCH} == 'staging' ]]; then

  aws cloudfront create-invalidation --distribution-id $stg_cdn_id --paths "/*"

elif [[ ${TRAVIS_BRANCH} == 'production' ]]; then

  aws cloudfront create-invalidation --distribution-id $prod_cdn_id --paths "/*"

fi
<%_ } _%>