from fastapi import FastAPI

from app.api import api

app = FastAPI()

@app.get('/words')
def get_all_words():
    return api.get_all_words()