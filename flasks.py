from flask import Flask
from flask import request
from flask_mysqldb import MySQL
mysql = MySQL()
app = Flask(__name__)
# My SQL Instance configurations 
# Change the HOST IP and Password to match your instance configurations
app.config['MYSQL_USER'] = 'web'
app.config['MYSQL_PASSWORD'] = 'webPass'
app.config['MYSQL_DB'] = 'emr'
app.config['MYSQL_HOST'] = 'localhost' #for now
mysql.init_app(app)

@app.route("/add") #Add Student
def add():
    name = request.args.post('name')
    nickname = request.args.post('nickname')
    birthday = request.args.post('Birthday')
    gender = request.args.post('Gender')
    address = request.args.post('Address')
    phonenumber = request.args.post('phonenumber')
    email = request.args.post('email')
    
    cur = mysql.connection.cursor() #create a connection to the SQL instance
    #Compose an INSERT statement:
    s='''INSERT INTO contacts(Name, Nickname, Birthday, Gender, Address, Phonenumber, email) VALUES('{}','{}','{}','{}','{}','{}','{}');'''.format(name, nickname, birthday, gender, address, phonenumber,email)
    cur.execute(s)
    mysql.connection.commit()
    return s
@app.route("/") #Default - Show Data
def hello(): # Name of the method
    cur = mysql.connection.cursor() #create a connection to the SQL instance
    cur.execute('''SELECT * FROM students''') # execute an SQL statment
    rv = cur.fetchall() #Retreive all rows returend by the SQL statment
    ret = '{"Results":[' #Create return string
    first=True
    for row in rv: #Format the Output Results and add to return string
        if not first:
            ret=ret+','
        else:
            first=False
        ret=ret+'{"Name": "'+row[0]+'", "Email": "'+row[1]+'", "ID": '+str(row[2])+'}'
    ret=ret+']}'
    return ret      #Return the data in a string format

if __name__ == "__main__":
        app.run(host='0.0.0.0', port='8080') #Run the flask app at port 8080
    
