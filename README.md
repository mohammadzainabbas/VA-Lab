## Lab Work @ Visual Analysis 👨🏻‍💻

### Table of contents

- [Introduction](#introduction)
- [About the course](#about-course)
  <!-- * [Main Topics](#main-topics) -->
- [Labs](#labs)
  * [Lab 01 - Web Scrapping via Beautiful Soup](#lab-1)
  * [Lab 02 - Data Visualisation with Altair](#lab-2)
  * [Lab 03 - Interaction in Visualization with Altair](#lab-3)
  * [Lab 04 - Basic charts with d3.js](#lab-4)
  * [Lab 05 - Basic charts with d3.js (continue)](#lab-5)
- [Setup](#setup)
  * [Create new enviornment](#create-new-env)
  * [Setup `pre-commit` hooks](#setup-pre-commit)


#

<a id="introduction" />

### 1. Introduction

__`Data drives the world.`__ Nowadays, most of the data (_structured_ or _unstructured_) can be analysed via several techniques. Although, most of the data pipelines are being automated, there arises a key need to keep human in the loop. 

One of the fundamental ways to keep human-machine interaction more viable is to analyse data visually (to aid the human as much as possible). `Visual Analysis` introduces some techniques and tools for _analyzing_ and _visualizing_ data.

#

<a id="about-course" />

### 2. About the course

During this course, we will be introduced to techniques and tools for _analyzing_ and _visualizing_ data. It emphasizes how to combine computation and visualization to perform effective analysis. The course consists of two parts: a series of lectures on analytics and a series of lectures on visualization. Both parts will include hands-on tutorials during which you will work on analysis problems and start to build your own tools.

<!-- <a id="main-topics" />

#### 2.1. Main Topics

- [x] Preliminaries, Typology of graphs, Graph analytics measures
- [x] Basic algorithms: Random walk and Page Rank
- [x] Label propagation, Community detection, Influence maximisation
- [x] Graph analytics & Deep Learning -->

#

<a id="labs" />

### 3. Labs

The main aim of this repository is to keep track of the work we have done in __Visual Analysis (VA)__ labs. 

#

<a id="lab-1" />

#### 3.1. Lab 01 - Web Scrapping via Beautiful Soup

[Web Scrapping via Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/) is a Python package for the scraping data from the internet.

Please checkout lab's details [here](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab1) 

<a id="lab-2" />

#### 3.2. Lab 02 - Data Visualisation with Altair

[Vega-Altair](https://altair-viz.github.io/) is a declarative statistical visualization library for Python, based on Vega and Vega-Lite.

Please checkout lab's details [here](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab2) 

<a id="lab-3" />

#### 3.3. Lab 03 - Interaction in Visualization with Altair

[Vega-Altair](https://altair-viz.github.io/) is a declarative statistical visualization library for Python, based on Vega and Vega-Lite. In this lab, we will see how to use interactions with visualisation with [Vega-Altair](https://altair-viz.github.io/).

Please checkout lab's details [here](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab3) 

<a id="lab-4" />

#### 3.4. Lab 04 - Basic charts with d3.js

[D3.js](https://d3js.org/) is a producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards.

Please checkout lab's details [here](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab4) 

<a id="lab-5" />

#### 3.5. Lab 05 - Basic charts with d3.js (continue)

[D3.js](https://d3js.org/) is a producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards.

Please checkout lab's details [here](https://github.com/mohammadzainabbas/VA-Lab/tree/main/src/lab5) 

#

<a id="setup" />

### 4. Setup

If you want to follow along with the lab exercises, make sure to clone and `cd` to the relevant lab's directory:

```bash
git clone https://github.com/mohammadzainabbas/VA-Lab.git
cd VA-Lab/src/<lab-of-your-choice>
```

> For e.g: if you want to practice lab # 1, then you should do `cd VA-Lab/src/lab1`.

<a id="create-new-env" />

#### 4.1. Create new enviornment

Before starting, you may have to create new enviornment for the lab. Kindly, checkout the [documentation](https://github.com/mohammadzainabbas/VA-Lab/blob/main/docs/SETUP_ENV.md) for creating an new environment.

#

Once, you have activated your new enviornment, we may have to install all the dependencies for a given lab (kindly check if `requirements.txt` file exists for a given lab before running the below command):

```bash
pip install -r requirements.txt
```

<a id="setup-pre-commit" />

#### 4.2. Setup `pre-commit` hooks

In order to setup `pre-commit` hooks, please refer to the [documentation](https://github.com/mohammadzainabbas/VA-Lab/blob/main/docs/SETUP_PRE-COMMIT_HOOKS.md).

#
