FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729
VOLUME ["/app"]
COPY ./start.sh /app/
RUN chmod +x /app/start.sh

CMD ["/app/start.sh"]
