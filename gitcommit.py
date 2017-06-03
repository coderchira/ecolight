#!/usr/bin/python
import os,subprocess,sys
user_input = input("What is the commit message?  :")
command = "git add ."
subprocess.call(command.split())
command = "git commit -m"
command_stream = command.split()
command_stream.append(user_input)
subprocess.call(command_stream)
command = "git push https://coderchira:codevode21@github.com/coderchira/ecolight.git master"
subprocess.call(command.split())
