#!/bin/bash
set -e

VPS_USER="root"
VPS_HOST="TON_IP_VPS"  # ← remplace par ton IP ou domaine
REMOTE_PATH="/var/www/Blyss-web/dist"

echo "▶ Build..."
npm run build

echo "▶ Déploiement sur $VPS_HOST..."
rsync -av --delete dist/ "$VPS_USER@$VPS_HOST:$REMOTE_PATH"

echo "✓ Déployé."
