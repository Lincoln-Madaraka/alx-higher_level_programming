#!/usr/bin/python3
'''Python script that takes your GitHub credentials (username and password)
and uses the GitHub API to display your id'''
import requests
from sys import argv


def main():
    '''Entry point'''
    repo = argv[1]
    owner = argv[2]
    url = f'https://api.github.com/repos/{owner}/{repo}/commits'
    header = {'owner': owner,
              'repo': repo,
              }
    r = requests.get(url, headers=header)
    rs = sorted(r.json(), key=lambda d: d['commit']['author']['date'],
                reverse=True)
    try:
        for i in range(10):
            print('{}: {}'.format(rs[i].get('sha'),
                                  rs[i].get("commit")['author']['name']))
    except IndexError:
        pass


if __name__ == '__main__':
    main()
