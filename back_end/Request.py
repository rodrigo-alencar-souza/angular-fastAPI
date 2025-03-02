import requests
import time

url = "http://127.0.0.1:8000"
data = {
  "nome": "string",
  "email": "string",
  "mensagem": "string",
  "cep": "string",
  "cidade": "string",
  "pais": "string"
}
response = requests.get(url=url)

# Verificando o status da resposta
if response.status_code == 200:
    # Acessando os dados da resposta (em formato JSON, por exemplo)
    dados = response.json()
    print(dados)
else:
    print(f"Erro: {response.status_code}")
    
nome = dados['nome']    
email = dados['email']
mensagem = dados ['mensagem']
cep = dados['cep']    
cidade = dados['cidade']    
pais = dados['pais'] 

print(f'{nome}\n{email}\n{cidade}\n')   