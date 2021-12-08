from flask import Flask

app = Flask(__name__)



@app_route('/get-emissions-data')
def getemissionsData():
    jsonData = {
        1990: 5543.47,
        1991: 5501.92,
        1992: 5583.80,
        1993: 5691.26,
        1994: 5782.20,
        1995: 5843.90,
        1996: 6010.62,
        1997: 6258.47,
        1998: 6293.80,
        1999: 6291.25,
        2000: 6446.20,
        2001: 6406.04,
        2002: 6246.95,
        2003: 6306.12,
        2004: 6387.22,
        2005: 6401.12,
        2006: 6306.81,
        2007: 6397.67,
        2008: 6220.21,
        2009: 5793.66,
        2010: 6041.59,
        2011: 5796.78,
        2012: 5550.87,
        2013: 5690.79,
        2014: 5711.15,
        2015: 5586.69,
        2016: 5676.92,
        2017: 5613.64,
        2018: 5794.35
    }
    return jsonData


@app_route('/get-emissionsdata/<year>)')
def getemissionsData(year):
    jsonData = {
        1990: 5543.47,
        1991: 5501.92,
        1992: 5583.80,
        1993: 5691.26,
        1994: 5782.20,
        1995: 5843.90,
        1996: 6010.62,
        1997: 6258.47,
        1998: 6293.80,
        1999: 6291.25,
        2000: 6446.20,
        2001: 6406.04,
        2002: 6246.95,
        2003: 6306.12,
        2004: 6387.22,
        2005: 6401.12,
        2006: 6306.81,
        2007: 6397.67,
        2008: 6220.21,
        2009: 5793.66,
        2010: 6041.59,
        2011: 5796.78,
        2012: 5550.87,
        2013: 5690.79,
        2014: 5711.15,
        2015: 5586.69,
        2016: 5676.92,
        2017: 5613.64,
        2018: 5794.35
    }
    return jsonData[year]

@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['nm']
      return redirect(url_for('success',name = user))
   else:
      user = request.args.get('nm')
      return redirect(url_for('success',name = user))

if __name__ == '__main__':
   app.run(debug = True)
