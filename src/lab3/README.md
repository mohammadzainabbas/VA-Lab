## Lab 03 - Interaction in Visualization with Altair 👨🏻‍💻

### Table of contents

- [Introduction](#introduction)
  * [Vega-Altair](#vega-altair)
- [Data](#data)
- [Setup](#setup)
  * [Create new enviornment](#create-new-env)
  * [Setup `pre-commit` hooks](#setup-pre-commit)

#

<a id="introduction" />

### 1. Introduction

__`Data drives the world.`__ Nowadays, most of the data (_structured_ or _unstructured_) can be analysed easily via different techniques. In order to analyse your data, first you have to collect the data. We looked at the data collection part in the [last lab](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab1). 

Once, we have our data, its important to perform exploratory data analysis (EDA) first. Visualisation is the key part of EDA.

In this lab, we will use Vega-Altair package to see how we can visualise our data and interact with it as well to gain better understanding of our data.

Furthermore, we will also see intra-chart interactions and learn several concepts (like: [`brush`](https://altair-viz.github.io/gallery/interactive_brush.html), [`selections`/`transform`](https://altair-viz.github.io/user_guide/interactions.html) etc)

<a id="vega-altair" />

#### 1.1. Vega-Altair

[Vega-Altair](https://altair-viz.github.io/) is a declarative statistical visualization library for Python, based on Vega and Vega-Lite.

#

<a id="data" />

### 2. Data

For the purpose of this lab, we will use one of the built-in datasets i.e: `cars` from `vega_datasets` package. To follow along, simply import it from `vega_datasets` package.

```python
# Load car data from example datasets
from vega_datasets import data
cars = data.cars()
```

or you can use any other [`pandas.DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) that you want.

#

<a id="setup" />

### 3. Setup

If you want to follow along, make sure to clone and `cd` to this lab's directory:

```bash
git clone https://github.com/mohammadzainabbas/VA-Lab.git
cd VA-Lab/src/lab3
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

