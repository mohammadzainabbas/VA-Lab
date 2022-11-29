## Lab 04 - Basic charts with d3.js 👨🏻‍💻

### Table of contents

- [Introduction](#introduction)
- [Web Scraping via Beautiful Soup](#beautiful-soup)
- [Data](#data)
- [Setup](#setup)
  * [Create new enviornment](#create-new-env)
  * [Setup `pre-commit` hooks](#setup-pre-commit)

#

<a id="introduction" />

### 1. Introduction

__`Data drives the world.`__ Nowadays, most of the data (_structured_ or _unstructured_) can be analysed easily via different techniques. In order to analyse your data, first you have to collect the data. 

There are several ways one can collect the data. `Web Scrapping` is one of the most powerful way to collect the data (often real-time or more correct data).

In this lab, we will focus on some basic way to scrape the website data, and see how we can utilise some basic methods to convert a parsed web page into a table for analysing it later.

<a id="beautiful-soup" />

#### 1.1. Web Scraping via Beautiful Soup

[Web Scrapping via Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/) is a Python package for the scraping data from the internet.

#

<a id="data" />

### 2. Data

For the purpose of this lab, we will scrape a crypto-exchange i.e [`__CoinGecko__`](https://www.coingecko.com/). We will try to extract the table containing all the information about several different crypto-coins.

#

<a id="setup" />

### 3. Setup

If you want to follow along, make sure to clone and `cd` to this lab's directory:

```bash
git clone https://github.com/mohammadzainabbas/VA-Lab.git
cd VA-Lab/src/lab1
```

<a id="create-new-env" />

#### 3.1. Create new enviornment

Before starting, you may have to create new enviornment for the lab. Kindly, checkout the [documentation](https://github.com/mohammadzainabbas/VA-Lab/blob/main/docs/SETUP_ENV.md) for creating an new environment.

#

Once, you have activated your new enviornment, we will install all the dependencies of this project:

```bash
pip install -r requirements.txt
```

<a id="setup-pre-commit" />

#### 3.2. Setup `pre-commit` hooks

In order to setup `pre-commit` hooks, please refer to the [documentation](https://github.com/mohammadzainabbas/VA-Lab/blob/main/docs/SETUP_PRE-COMMIT_HOOKS.md).

#

