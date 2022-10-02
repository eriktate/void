#!/bin/bash
source .env
dbmate -d ./migrations "$@"
