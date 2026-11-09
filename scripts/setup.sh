#!/usr/bin/env bash

set -e -o pipefail

if [ -z "$DEPENDENCY_MANAGER" ] ; then
  export DEPENDENCY_MANAGER=npm
fi

mkdir -p static/images/

# Favicons (placeholder, from the theme's cm.svg)
SOURCE="themes/projektemacher-base/static/images/cm.svg" OPTIONS="-transparent white" ./themes/projektemacher-base/scripts/favicon.sh
cp themes/projektemacher-base/static/images/cm.svg static/images/

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done
