#!/usr/bin/python3
'''Python script that takes in a URL and an email,
sends a POST request to the passed URL with the email as a parameter,
and displays the body of the response (decoded in utf-8)'''
from urllib.request import urlopen, Request
from urllib.parse import urlencode
from sys import argv


def main():
    '''Entry point'''
    url = argv[1]
    email = {'email': argv[2]}
    data = urlencode(email)
    data = data.encode('ascii')
    request = Request(url, data)
    with urlopen(request) as r:
        print(r.read().decode('utf-8'))


if __name__ == '__main__':
    main()

