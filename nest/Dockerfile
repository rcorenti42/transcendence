# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: lothieve <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2022/11/09 14:36:04 by lothieve          #+#    #+#              #
#    Updated: 2023/01/04 16:10:56 by lothieve         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM node:19

RUN mkdir /profilepics
WORKDIR /usr/app/
CMD npm install; npm run build; npm run start
