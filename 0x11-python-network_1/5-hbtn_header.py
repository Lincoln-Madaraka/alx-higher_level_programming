#!/usr/bin/python3
'''Python script that fetches https://alx-intranet.hbtn.io/status'''
import requests
from sys import argv


def main():
    '''Entry point'''
    url = argv[1]
    r = requests.get(url)
    print(r.headers.get('X-Request-Id'))


if __name__ == '__main__':
    main()
