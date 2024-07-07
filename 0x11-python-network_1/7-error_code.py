#!/usr/bin/python3
'''Python script that takes in a URL, sends a request to the URL
and displays the body of the response'''
import requests
from sys import argv


def main():
    '''Entry point'''
    url = argv[1]
    r = requests.get(url)
    if r.status_code < 400:
        print(r.text)
    else:
        print('Error code: {}'.format(r.status_code))


if __name__ == '__main__':
    main()
