echo running backup database...
# date backup
date=$(date +%d-%m-%y_%H-%M-%S)
# name archive
name="_collector.sqlite3"
#concat date and name
name=$date$name
# navigate to path database
cd ../../database
# copy the file database collector
# the copy name is the variable name
cp collector.sqlite3 $name
echo backup performed successfully
# navigate to path scripts
cd ../app/scripts
# update log
bash createLog.sh "backup database success"
