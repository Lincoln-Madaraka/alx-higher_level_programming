#!/usr/bin/python3
'''Python script that takes in a URL, sends a request
to the URL and displays the body of the response
(decoded in utf-8)'''
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from sys import argv


def main():
    '''Entry point'''
    url = argv[1]
    req = Request(url)
    try:
        with urlopen(req) as r:
            print(r.read().decode('utf-8'))
    except HTTPError as e:
        print('Error code: {}'.format(e.status))


if __name__ == '__main__':
    main()

