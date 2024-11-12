#!/bin/bash

# Восстановить базу данных из tar файла
echo "Restoring the database from backup.tar..."
pg_restore -U "$POSTGRES_USER" -d "$POSTGRES_DB" /docker-entrypoint-initdb.d/backup.tar

echo "Database restored successfully."
