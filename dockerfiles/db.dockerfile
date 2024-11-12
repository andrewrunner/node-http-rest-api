FROM postgres:17-alpine

COPY src/database/dvdrental.tar /docker-entrypoint-initdb.d/backup.tar

COPY src/database/restore.sh /docker-entrypoint-initdb.d/restore.sh
RUN chmod +x /docker-entrypoint-initdb.d/restore.sh