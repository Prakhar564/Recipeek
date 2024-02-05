@echo off

REM REM Navigate to the backend directory
cd backend
echo Current directory: %cd%
pause
REM REM Install virtualenv globally (if not using Python's built-in venv module)
python -m pip install virtualenv

REM REM Create a Python virtual environment if it doesn't exist
IF NOT EXIST "venv" (
    python -m venv venv
)

cd ..
REM Installing Python dependencies from requirements.txt...
call backend\venv\Scripts\python.exe -m pip install -r requirements.txt



REM REM Navigate to the frontend directory
cd frontend
echo Current directory: %cd%
pause
REM REM Install Node.js dependencies
npm install
echo Frontend dependencies installed.
pause
cd ..

echo Setup complete!
pause