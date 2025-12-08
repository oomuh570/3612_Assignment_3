# COMP 3612 — Assignment 3
## Node.js API for Paintings, Artists, and Galleries

This project implements a REST API using Node.js and Express.js to serve data about paintings, artists, and galleries from three JSON datasets.
The API supports searching, filtering, and retrieving items by parameters such as ID, title, color, year, and country.

## Hosting

Your live API is hosted on Glitch:

https://YOUR-GLITCH-URL.glitch.me

(Replace this with your actual Glitch URL.)

## Installation (Local)

```bash
npm install
node server.js
```

Then visit:

http://localhost:8080/api/paintings

## API Endpoints  
Replace `YOUR-GLITCH-URL` with your actual Glitch URL.

# Paintings Endpoints
https://YOUR-GLITCH-URL.glitch.me/api/paintings
https://YOUR-GLITCH-URL.glitch.me/api/painting/433
https://YOUR-GLITCH-URL.glitch.me/api/painting/43374534856
https://YOUR-GLITCH-URL.glitch.me/api/painting/gallery/7
https://YOUR-GLITCH-URL.glitch.me/api/painting/gallery/43374534856
https://YOUR-GLITCH-URL.glitch.me/api/painting/artist/106
https://YOUR-GLITCH-URL.glitch.me/api/painting/artist/43374534856
https://YOUR-GLITCH-URL.glitch.me/api/painting/year/1850/1900
https://YOUR-GLITCH-URL.glitch.me/api/painting/year/2200/2400
https://YOUR-GLITCH-URL.glitch.me/api/painting/title/self
https://YOUR-GLITCH-URL.glitch.me/api/painting/title/dfjkghdfkgh
https://YOUR-GLITCH-URL.glitch.me/api/painting/color/NAPA
https://YOUR-GLITCH-URL.glitch.me/api/painting/color/coffee%20bean
https://YOUR-GLITCH-URL.glitch.me/api/painting/color/kcvhvxchbkcj

# Artists Endpoints
https://YOUR-GLITCH-URL.glitch.me/api/artists
https://YOUR-GLITCH-URL.glitch.me/api/artists/FRANCE
https://YOUR-GLITCH-URL.glitch.me/api/artists/france
https://YOUR-GLITCH-URL.glitch.me/api/artists/sdfjjsdf

# Galleries Endpoints
https://YOUR-GLITCH-URL.glitch.me/api/galleries
https://YOUR-GLITCH-URL.glitch.me/api/galleries/france
https://YOUR-GLITCH-URL.glitch.me/api/galleries/kcvhvxchbkcj

## Not Found Response

```json
{ "message": "No data found for your request." }
```

## Submission

Before submitting:
1. Ensure all test links work using your Glitch URL.
2. Email your instructor with:
   - Your GitHub repository link
   - Your Glitch hosting link