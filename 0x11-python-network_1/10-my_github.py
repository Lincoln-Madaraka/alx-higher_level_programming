#!/usr/bin/python3
'''Python script that takes your GitHub credentials (username and password)
and uses the GitHub API to display your id'''
import requests
from sys import argv


def main():
    '''Entry point'''
    username = argv[1]
    passwd = argv[2]
    url = f"https://api.github.com/users/{username}"
    headers = {"Authorization": f"token {passwd}"}
    r = requests.get(url, headers=headers)
    print(r.json().get('id'))


if __name__ == '__main__':
    main()

