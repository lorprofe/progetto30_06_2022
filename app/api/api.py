import json

def get_all_words():
    with open('data/data.json') as stream:
        solutions = json.load(stream)
        return solutions