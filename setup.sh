#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting project setup..."

# Check if Python is installed
if ! command -v python3 &> /dev/null
then
    echo "Error: Python3 is not installed. Please install Python3 and try again."
    exit 1
fi

# Check if pip is installed
if ! command -v pip &> /dev/null
then
    echo "Error: pip is not installed. Please install pip and try again."
    exit 1
fi

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate the virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install backend dependencies
echo "Installing backend dependencies..."
pip install -r backend/requirements.txt

# Run the backend script
echo "Running the populate script..."
python3 backend/populate.py

echo "Setup complete!"
