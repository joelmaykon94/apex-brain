import pandas as pd

df = pd.read_csv('movies.csv')
print(df["genre"].unique())
