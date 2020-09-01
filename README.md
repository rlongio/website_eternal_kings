# Eternal Kings MC Website

![](https://eternal-kings.netlify.app/img/logos/logo_main.png | width=50)
![](https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png | width=100)

## Development

To begin development of the site:

- Clone the repo: `git clone https://github.com/rlongio/eternal_knights_website.git`
- `cd` into the directory created and enter `npm install` to install all dev dependencies.
- Run command `npm start`. This will start a development server with live reloading so that you can see the changes you make live via a local server.

You must have npm and Gulp installed globally on your machine in order to use these features.

## Netlify

To deploy, simply commit your changes and push to the master branch of the repository. Netlify is setup to take care of the rest.

It will automatically optimize images and fonts for speed. As long as the domain host has an A Record and CNAME record pointing approriately, you can set it and forget it.

## Build

Netlify will run the command `gulp build` to build the production version of the wesbite. You can enter the same command in your terminal to see the production version. The production version is optimized for speed and will not include and dev dependencies.

## Issues

Contact Ryan Long <ryan@rlong.io>
