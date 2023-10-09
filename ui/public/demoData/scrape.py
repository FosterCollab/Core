import pandas as pd
import requests
import numpy as np

url = "https://raw.githubusercontent.com/MunGell/awesome-for-beginners/main/README.md"

response = requests.get(url)

if response.status_code == 200:
    markdown_content = response.text
    content_list = markdown_content.split("- [")

else:
    print("Failed to retrieve the file. Status code:", response.status_code)


records = pd\
    .DataFrame({'Markdown Content': content_list})\
    .rename(columns={'Markdown Content': 'content'})\
    .assign(name = lambda x: x['content'].str.split("]\(", expand=True)[0],
            link_raw = lambda x: x['content'].str.split("]\(", expand=True)[1])\
    .drop(columns=['content'])\
    .assign(link = lambda x: x['link_raw'].str.split("\) _\(label: ", expand=True)[0],
            label_raw = lambda x: x['link_raw'].str.split("\) _\(label: ", expand=True)[1])\
    .drop(columns=['link_raw'])\
    .assign(label = lambda x: x['label_raw'].str.split("\)_ <br>", expand=True)[0],
            description = lambda x: x['label_raw'].str.split("\)_ <br>", expand=True)[1])\
    .drop(columns=['label_raw'])\
    .dropna()\
    .assign(link = lambda x: x["link"].str.strip(),
            name = lambda x: x["name"].str.strip(),
            label = lambda x: x["label"].str.strip(),
            description = lambda x: x["description"].str.strip())\
    .reset_index(drop=True)\
    .replace("n/a", np.nan)

records.to_json('projects.json', orient='records', lines=True)
