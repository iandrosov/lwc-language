# SFDX Project - FortuneTeller App

This sfdx project is Einstein Language API app built with Lightning Web Components. LWC provides User Interface to test Intent and Sentiment Einstein Platform Services APIs.

The app is built with Salesforce DX using Lightning Web Components that are only available from Spring 19 release, Salesforce API version 45.0 and above. The project can be used on Spring 19 pre-release developer or Scratch org with API version 45.00.

## Set Up Your Environment
To use the app need to [signup](https://api.einstein.ai/signup
) for Einstein Platform Services account. To signup
the Salesforce org or Heroku account is required. 

If you are new to Salesforce, alternatively the [Einstein Intent API Basics](https://trailhead.salesforce.com/content/learn/modules/einstein_intent_basics/einstein_intent_basics_env) [Trailhead](https://trailhead.salesforce.com) badge can help to set up your environment with step by step instructions.

## Installation Instructions

There are two ways to install LWC Fortune Teller App:

-   [Using Salesforce DX](#installing-permission-navigator-using-salesforce-dx): This is the recommended installation option. Use this option if you are a developer who may want to customize the app and may be contribute to this project code.
-   [Using an Unlocked Package](#installing-permission-navigator-using-an-unlocked-package): This option allows anybody to install and use the Permission Navigator App without installing a local development environment.

## Installation using Salesforce DX

> **IMPORTANT**: Because of a current issue in pre-release, make sure your project path doesn't include any of the following folder names: **lwc**, **aura**, **wave**. For example, DO NOT clone this repository in a folder called **/Projects/lwc**.

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Sign up for a Spring '19 pre-release org and enable Dev Hub
    - Install the pre-release version of the Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authenticate with your Spring '19 hub org and provide it with an alias (spring19hub) or other personal alias you prefer:

    ```
    sfdx force:auth:web:login -d -a spring19hub
    ```

1. Clone the lwc-language repository:

    ```
    git clone https://github.com/iandrosov/lwc-language
    cd lwc-language
    ```

1. Create a scratch org and provide it with an alias (**lwc-language** in the command below):

    ```
    sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-language
    ```

1. Push the app to your scratch org:

    ```
    sfdx force:source:push -u lwc-language
    ```

1. Open the scratch org:

    ```
    sfdx force:org:open -u lwc-laguage
    ```

1. In App Launcher, select the **LWC Fortune Teller** app.


## Installation using an Unlocked Package

1. [Sign up](https://www.salesforce.com/form/signup/prerelease-spring19/) for a Spring '19 pre-release org, enable My Domain, and deploy it to all users.

1. [Click](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000K9npIAC) to install the unlocked package in your Spring '19 org. This package needs access to AI API api.einstein.ai user will be requested to authorize this remote setting during the install.

1. Select **Install for All Users**

1. In App Launcher, select the **LWC Fortune Teller** app.

** In case you do not see the app available as one of app launcher choices after package install, permission set assignment may bew required.

1. Assign your user a permission set `LWC_Fortune_Teller`

## Resources


## Issues

User may get a message during the package installation, that it took too long and notification email will be sent. This can be expected in some orgs, just check the email ensure the install did not have errors and the app should be ready to use.

Ensure that MYDomain is enabled on the target org and deploy it to all users, Lightning Web components require My Domain.


