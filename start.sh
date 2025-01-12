#!/bin/bash

# Exit on any error
set -e

echo "Starting the full-stack application..."

# Step 1: Activate backend virtual environment
echo "Activating the backend virtual environment..."
source venv/bin/activate

# Step 2: Start the Django backend server in the background
echo "Starting the Django backend server..."
cd backend
python3 manage.py runserver &
BACKEND_PID=$!
cd ..

# Step 3: Start the frontend server
echo "Setting up and starting the frontend server..."
cd frontend_nextjs/sts_poll_app
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

# Step 4: Instructions for stopping the servers
echo "Both servers are running!"
echo "Backend is running at http://127.0.0.1:8000/"
echo "Frontend is running at http://localhost:3000/"
echo "Press [Ctrl+C] to stop both servers."

# Wait for user to terminate
wait $BACKEND_PID $FRONTEND_PID
