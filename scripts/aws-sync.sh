#!/bin/bash
# get the current script directory
BASEDIR=$(dirname "$0")
#publish to aws s3
aws s3 sync "$BASEDIR"/../build/ s3://mgrgs.com/portfolio --delete