from flask import Flask, request, render_template, jsonify, make_response
import pickle
import pandas as pd

# instantiate the app
app=Flask(__name__)

#loading the model
model=pickle.load(open('model.pkl','rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    #parsing the incoming json data
    data=request.get_json()

    #extracting the features
    features = [
        data['gender'],
        data['age'],
        data['hypertension'],
        data['heart_disease'],
        data['smoking_history'],
        data['bmi'],
        data['HbA1c_level'],
        data['blood_glucose_level']
    ]

    # Preparing the data for prediction
    df = pd.DataFrame([features])

    #predicting the result
    prediction = model.predict(df)
    result = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'

    return make_response(jsonify({'prediction': result}))

if __name__=="__main__":
    app.run(debug=True, port=5000)