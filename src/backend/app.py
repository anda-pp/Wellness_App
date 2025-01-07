import traceback
from flask import Flask, jsonify, request
from flask_cors import CORS
from bson.json_util import dumps
from bson.objectid import ObjectId
from database import get_database
from models.menu_model import MenuModel
from backend.models.usermodel import UserModel
import openai
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize database and model
db = get_database()
menu_model = MenuModel(db)
user_model = UserModel(db)

@app.route('/api/auth/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        password = data['password']

        # Use the UserModel to create a new user
        user_id = user_model.create_user(first_name, last_name, email, password)
        return jsonify({"success": True, "user_id": user_id}), 201

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/auth/signin', methods=['POST'])
def signin():
    try:
        data = request.json
        email = data['email']
        password = data['password']

        # Use the UserModel to verify credentials
        user_id = user_model.verify_user(email, password)
        return jsonify({"success": True, "user_id": user_id}), 200

    except ValueError as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 401
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@app.route('/api/save_meal', methods=['POST'])
def save_meal():
        data = request.json

         # Validate and structure the data
        date = data.get("date", datetime.now().strftime('%Y-%m-%d'))
        meals = {
            "breakfast": data.get("breakfast", []),
            "lunch": data.get("lunch", []),
            "dinner": data.get("dinner", []),
            "snacks": data.get("snacks", []),
            "water": data.get("water", [])
        }

        # Save or update the document in the database
        db.meals.update_one(
            {"date": date},
            {"$set": {"meals": meals}},
            upsert=True
        )
        return jsonify({"message": "Meal data saved successfully!"})



openai.api_key = os.getenv('OPENAI_API_KEY')



if __name__ == '__main__':
    app.run(debug=True)
