#!/bin/bash
echo "Currency List, Press any key to exit"

while true;do
read -t 1 -n 1
if [ $? = 0 ] 
then break
else
sleep 5s
clear
node scrapping.js
fi
done



