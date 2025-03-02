from typing import Any
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import requests
import time

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://seu-dominio.com",
    "http://localhost:4200/form1",
    "http://localhost:4200/form2",
    "http://localhost:4200"
]

data_store = None

class Teste(BaseModel):
    nome: str 
    email: str 
    mensagem: str 
    cep: str
    cidade: str
    pais: str


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/")
async def create_teste(teste: Teste) -> Any:
    global data_store
    data_store = teste
    return {"messagem ": f"Dados Recebidos"}

@app.get("/")
async def get_data(): 
    if data_store:
        return data_store
    else:
     return {"fmessage": f"Nenhum dado encontrado"}

uvicorn.run(app, port=8000)