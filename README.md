# Diabetes Predictor

A web application that predicts the likelihood of diabetes based on various user inputs like age, gender, BMI, hypertension, heart disease, smoking history, hemoglobin level, and blood glucose level.

## Features

- User-friendly form to input health parameters.
- Backend integration with a machine learning model to predict diabetes risk.
- Real-time display of prediction results.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/biswarup-naha/diabetes-predictor.git
   cd diabetes-predictor

2. **Make a virtual environment**

    ```bash
        python -m venv venv
        venv\Scripts\activate
    ```

    *note: if running on windows please write*

    ```bash
        python -m vitualenv venv
    ```

3. **Install the required dependencies**

    ```bash
        pip install -r requirements.txt
    ```

4. **Run the Flask server:**

    ```bash
        flask run
    ```

    The application will be accessible at <http://127.0.0.1:5000>.
