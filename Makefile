backend-run:
	flask --app backend/app run --debug
requirements:
	cd backend; pip install -r requirements.txt
frontend-run:
	cd frontend/recipe-creator; npm run start
