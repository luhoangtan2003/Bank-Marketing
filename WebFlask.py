import flask as fl
import numpy as np
import pickle

Model = pickle.load(open('./SaveModel/XGB.pkl', 'rb'))

Flask = fl.Flask(__name__, static_url_path='/Static')

def Convert_Nominal(Object, List):
    Index = List.index(Object)
    Len = len(List)
    Value = [False]*Len
    Value[Index] = True
    return Value

def Get_Value_Form(Form, Fields):
    Element = list()
    for Field in Fields:
        Get_Value = Form[Field]
        if Field in ['Age', 'Balance', 'Day', 'Month', 'Campaign', 'Pdays', 'Previous']:
            Value = int(Get_Value)
        elif Field in ['Default', 'Housing', 'Loan']:
            Value = 1 if Get_Value == 'Yes' else 0           
        elif Field == 'Poutcome':
            Poutcome = ['Unknown', 'Failure', 
                        'Success', 'Other']
            Value = Poutcome.index(Get_Value)
        elif Field == 'Marital':
            Marital = ['Divorced', 'Married', 'Single']
            Value = Convert_Nominal(Get_Value, Marital)
        elif Field == 'Contact':
            Contact = ['Cellular', 'Telephone', 'Unknown']
            Value = Convert_Nominal(Get_Value, Contact)
        elif Field == 'Education':
            Education = ['Primary', 'Secondary', 
                         'Tertiary', 'Unknown']
            Value = Convert_Nominal(Get_Value, Education)
        elif Field == 'Job':
            Job = ['Admin', 'Blue-collar', 'Entrepreneur', 
                   'Housemaid', 'Management', 'Retired', 
                   'Self-employed', 'Services', 'Student', 
                   'Technician', 'Unemployed', 'Unknown']
            Value = Convert_Nominal(Get_Value, Job)

        Element.append(Value) if not isinstance(Value, list) else Element.extend(Value)
    
    return Element

def Prediction(X):
    Y = Model.predict(np.array([X]))
    if Y[0] == 1:
        return 'OK'
    else:
        return 'NO'

def Render_Result(HTML, Value):
    return fl.render_template(HTML, Y=Value)

@Flask.route('/')
def Load():
    return fl.render_template('Home.html')

@Flask.route('/Predict', methods=['POST'])
def Home():
    Fields = ['Age', 'Default', 'Balance', 'Housing', 'Loan', 'Day', 'Month', 'Campaign', 
              'Pdays', 'Previous', 'Poutcome', 'Job', 'Marital', 'Education', 'Contact']    
    
    Get_Form = fl.request.form

    Element = Get_Value_Form(Get_Form, Fields)

    Label = Prediction(Element)

    return Render_Result('Result.html', Label)

if __name__ == "__main__":
    Flask.run(debug=True)