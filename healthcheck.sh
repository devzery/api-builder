#!/bin/sh

curlCheck() {
  if ! curl -s --head "$1" | head -n 1 | grep -q "HTTP/1.[01] [23].."; then
    echo "URL request failed!"
    exit 1
  else
    echo "URL request succeeded!"
  fi
}

if [ "$ENABLE_SUBPATH_BASED_ACCESS" = "true" ]; then
  curlCheck "https://java.eastus.cloudapp.azure.com//backend/ping"
else
  curlCheck "http://localhost:3000"
  curlCheck "http://localhost:3100"
  curlCheck "https://java.eastus.cloudapp.azure.com/ping"
fi
