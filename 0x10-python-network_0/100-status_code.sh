#!/bin/bash
# Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response.
curl -so /dev/null "$1" -w '%{response_code}'
