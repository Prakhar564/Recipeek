# Use an official Python runtime as a parent image
FROM python:3.11.4

# Set the working directory in the container to /app
WORKDIR /app

# Set environment variables for Python
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Install Node.js and NPM
RUN apt-get update && apt-get install -y --no-install-recommends \
    nodejs \
    npm \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip install --upgrade pip

# Install Python dependencies
COPY ./requirements.txt /app/
RUN pip install -r requirements.txt

# Prepare frontend dependencies
COPY ./frontend/package.json ./frontend/package-lock.json* /app/frontend/
WORKDIR /app/frontend
RUN npm install

# Copy the rest of the application code
COPY . /app

# Set WORKDIR back to the application root
WORKDIR /app

# Define the entrypoint command to start Gunicorn with your Django app
ENTRYPOINT ["gunicorn", "backend.recipeek.wsgi:application", "--bind", "0.0.0.0:8000"]
