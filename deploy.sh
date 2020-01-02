#!/bin/bash

if [[ "$#" == 2 ]];
then
  BUMP="npm version "$2" --force -m 'Major version %s'";
  echo $BUMP;
  eval $BUMP;
  yarn build;
  git add .;
  git commit -m "New version: $1"
  git push --follow-tags;
  exit 0;
else
  echo "";
  echo "You must pass version and type, example: \`./deploy.sh 2.0.3 patch\` or run \`yarn deploy patch\`";
  echo "";
  exit 1;
fi