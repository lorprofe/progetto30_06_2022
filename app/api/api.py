import json

def get_all_words():
    with open('data/data.json') as stream:
        words = json.load(stream)
        return words