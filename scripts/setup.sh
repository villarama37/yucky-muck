#!/bin/sh

# Hapi-starter-kit update list
##### config.js
# X change service port number
# change service name in config
# X supply new database name if needed and update in config
# X replace log group names


# update database.json and database migration files
# update name and description in package.json
# X update SAM template: description, resource name, function name, and stage name
# X rename title in hapi swagger plugin

# exit immediately if there are any errors
set -e

# Replace database user with 'nora'
sed -i "s/user: 'starter-kit'/user: 'nora'/g" ../config.js

echo "Service name i.e. Hapi Starter Kit:"
read answer
  sed -i "s/Hapi Starter Kit/$answer/g" ../docs/api.md
  sed -i "s/Test/$answer/g" ../src/plugins/plugins.js
  sed -i "s/Example Hapi/$answer API/g" ../package.json
  
# convert to hyphened
  HYPHENED="${answer/ /-}"
  LOWER_HYPHENED="${HYPHENED,,}"
  sed -i "s/hapi-starter-kit/$LOWER_HYPHENED-api/g" ../package.json
  sed -i "s/hapi-starter-kit example/$LOWER_HYPHENED/g" ../sam-template.yml
  # database name i.e. starter-kit"
  sed -i "s/starter-kit/$LOWER_HYPHENED/g" ../config.js
  sed -i "s/starter-kit/$LOWER_HYPHENED/g" ../database.json
  sed -i "s/starter-kit/$LOWER_HYPHENED/g" ../migrations/schema/config.json
  
# convert to camel case
  CAMEL_CASE="${answer/ /}"
  LOWER_CAMEL_CASE="${CAMEL_CASE,}"
  sed -i "s/StarterKit/$CAMEL_CASE/g" ../sam-template.yml
  sed -i "s/starter/$LOWER_CAMEL_CASE/g" ../sam-template.yml
  # database config name
  sed -i "s/starterKitDB/$LOWER_CAMEL_CASE/g" ../config.js
  sed -i "s/starterKitDB/$LOWER_CAMEL_CASE/g" ../src/plugins/plugins.js
  
echo "Port number i.e.4044:"
read answer
  sed -i "s/4044/$answer/g" ../config.js

# echo "Log group:"
# read answer
#   sed -i "s/\/starter-kit/\/$answer/g" ../config.js

# echo "Database config name i.e. starterKitDB:"
# read answer
#   sed -i "s/starterKitDB/$answer/g" ../config.js
#   sed -i "s/starterKitDB/$answer/g" ../src/plugins/plugin.js

# # echo "Database name i.e. starter-kit:"
# # read answer
#   sed -i "s/starter-kit/$answer/g" ../config.js
#   sed -i "s/starter-kit/$answer/g" ../database.json
#   sed -i "s/starter-kit/$answer/g" ../migrations/schema/config.json
