#!/bin/sh

# Replace the MANGO host URL placeholder in the distribution files with the runtime MANGO host URL
find /app/build/assets/js -type f -name "*.js" -exec sed -i -e "s@http://PLACEHOLDER_MANGO_HOST_URL@${MANGO_HOST_URL}@g" {} +

exec "$@"
