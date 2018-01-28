#!/bin/bash
#setup
clear
cd
mkdir theBest
cd theBest
npm install ionic
npm install react
npm install express
#the os goes below
clear
echo "login:"
read user
echo "password":
read -s pass
clear
echo $user
ls
while true;do
echo $user
ls
read cmd
$cmd
done
