#!/bin/bash
#publish to aws s3
aws s3 sync ../../build/ s3://mgrgs.com/portfolio --delete