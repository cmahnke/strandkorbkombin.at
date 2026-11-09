#!/usr/bin/env bash
# Builds @projektemacher/coursereader from the git dependency.
# npm installs git dependencies without running their `prepack` script, so the
# compiled `dist/` is missing. This script clones the upstream repo, builds it
# and copies the result into the installed package directory. Skipped when the
# package already ships a working `dist/` (e.g. after an npm release).

set -e -o pipefail

NAME="@projektemacher/coursereader"
PACKAGE_DIR="node_modules/$NAME"
CACHE_DIR="node_modules/.cache/coursereader"
REPO="https://github.com/cmahnke/coursereader.git"

if [ -f "$PACKAGE_DIR/dist/index.js" ]; then
    exit 0
fi

echo "Building $NAME from source (missing dist/)"

rm -rf "$CACHE_DIR"
mkdir -p "$(dirname "$CACHE_DIR")"
git clone --depth 1 "$REPO" "$CACHE_DIR"

cd "$CACHE_DIR"
npm ci --ignore-scripts
npm run build

cd - >/dev/null
mkdir -p "$PACKAGE_DIR/dist"
cp -r "$CACHE_DIR/dist/." "$PACKAGE_DIR/dist/"
cp "$CACHE_DIR/README.md" "$PACKAGE_DIR/README.md"

echo "Built $NAME: $PACKAGE_DIR/dist"
