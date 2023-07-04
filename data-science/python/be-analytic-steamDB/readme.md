# Coletando dados do steam DB [[SITE]](https://steamdb.info/sales/)

## Requisitos para executar este projeto
- Python 3
- Docker
**OBS: Pode ser utilizado somente o docker e os comandos abaixo**
Instalação do docker: [Get Docker
](https://docs.docker.com/get-docker/)

### Criar imagem docker
```docker build -t get_data_steamDB .```

### executar o container docker
``` docker run -it --rm get_data_steamDB ```

Bibliotecas utilizadas no projeto:
- **beautifulsoup4** (Tratamento de dados) - link: [Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- **zenrows** (Coleta de dados) - link: [Documentation overview python](https://www.zenrows.com/documentation#overview-python)
- **google-cloud-bigquery** (Armazenamento dos dados) - link:[Python Client for Google BigQuery](https://cloud.google.com/python/docs/reference/bigquery/latest)
