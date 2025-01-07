class MenuModel:
  
  def __init__(self, db):
        self.collection = db['users']

  def meal_schema(data):
            return {
            "user_id": data.get("user_id"),
            "date": data.get("date"),  # e.g., "2025-01-07"
            "meals": {
            "breakfast": data.get("breakfast", []),
            "lunch": data.get("lunch", []),
            "dinner": data.get("dinner", []),
            "snacks": data.get("snacks", []),
        },
        "water": data.get("water", [])
    }
