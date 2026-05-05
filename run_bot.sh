#!/bin/bash

while sleep 1
do
	for i in {1..5}
	do
	  node /bot/xss-bot.js $name_service ${i}
	done;
done;
