# log msg
msg=$1
msg=' | '$msg

# add changes to the log file
# get date
date=$(date +"%D %T")
# concat msg Log (date + msg)
logmsg=$date$msg
# go to the path of log file
cd ..
# add msg to log file
echo $logmsg >> log.txt
echo log updated successfully
