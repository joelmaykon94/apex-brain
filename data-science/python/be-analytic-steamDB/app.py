# pip install zenrows
from zenrows import ZenRowsClient
from bs4 import BeautifulSoup
import json
from google.cloud import bigquery
import json

def get_data():
    # COLOQUE AQUI A API KEY DO ZEN ROWS: ZenRowsClient("<API KEY>")
    client = ZenRowsClient("")
    url = "https://steamdb.info/sales/"
    params = {"js_render": "true", "antibot": "true", "premium_proxy": "true"}
    response = client.get(url, params=params)
    return response.text

def save_file(data, name_file):
    with open(name_file, "w") as f:
        f.write(data)

def read_file(name_file):
    with open(name_file, "r") as file:
        file_txt = file.read()
        return file_txt

def get_data_by_table(file, name_class_table):
    soup = BeautifulSoup(file, "html.parser")
    table = soup.find("table", attrs={"class": name_class_table})
    return table

def get_rows_of_table(table):
    table_data = []
    i = 0
    for row in table.find_all("tr", attrs={"class": "app"}):
        
        
        if len(row.find_all()) == 16:
            name = row.find_all()[6].text
            price_discount = row.find_all()[10].text
            price = row.find_all()[11].text
            rating = row.find_all()[12].text
            release = row.find_all()[15].text
        
        if len(row.find_all()) == 17:
            name = row.find_all()[6].text
            price_discount = row.find_all()[11].text
            price = row.find_all()[12].text
            rating = row.find_all()[13].text
            release = row.find_all()[16].text
        
        if len(row.find_all()) == 18:
            name = row.find_all()[6].text
            price_discount = row.find_all()[12].text
            price = row.find_all()[13].text
            rating = row.find_all()[14].text
            release = row.find_all()[17].text

        game = {
            "name": name,
            "price_discount": price_discount,
            "price": price,
            "rating": rating,
            "release": release,
        }
        
        table_data.append(game)

    return table_data

def insert_data_bigquery(data):
    client = bigquery.Client()
    # Aqui id da tabela no bigquery é o primeiro parâmetro insert_rows_json('table_id', data)
    errors = client.insert_rows_json('', data)  # Make an API request.
    if errors == []:
        print("New rows have been added.")
    else:
        print("Encountered errors while inserting rows: {}".format(errors))

def init():
    page = get_data()
    save_file(page, "page.html")
    name_file = "page.html"
    file_html = read_file(name_file)
    name_class = "table-sales"
    table = get_data_by_table(file_html, name_class)
    table_rows = get_rows_of_table(table)
    insert_data_bigquery(table_rows)

init()
