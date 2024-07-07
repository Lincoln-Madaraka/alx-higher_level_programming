#!/usr/bin/python3
'''Python script that takes in a letter and sends a POST request
to http://0.0.0.0:5000/search_user with the letter as a parameter'''
import requests
from sys import argv


def main():
    '''Entry point'''
    if len(argv) > 1:
        q = argv[1]
    else:
        q = ''
    url = 'http://0.0.0.0:5000/search_user'
    try:
        r = requests.post(url, data={'q': q})
        json = r.json()
        if len(json) == 0:
            print('No result')
        else:
            print('[{}] {}'.format(json.get('id'), json.get('name')))
    except Exception as e:
        print('Not a valid JSON')


if __name__ == '__main__':
    main()
