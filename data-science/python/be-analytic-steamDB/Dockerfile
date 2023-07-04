# Usar uma imagem base do Python 3
FROM python:3

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os requisitos do aplicativo para o diretório de trabalho
COPY requirements.txt .

# Instalar as dependências do aplicativo
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Comando para iniciar o aplicativo
CMD ["python", "app.py"]