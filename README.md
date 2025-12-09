
# COMP 3612 — Assignment 3  
## Node.js API for Paintings, Artists, and Galleries (Render Deployment)

This project implements a RESTful API using **Node.js** and **Express.js**, serving data for **paintings**, **artists**, and **galleries**.  
All routes match the structure required in the assignment and include example test URLs.

---

# 🚀 Live Deployment

Your API is deployed at:

➡️ **https://three612-assignment-3.onrender.com**

Use this base URL for all test examples.

---

# 📁 Project Structure

```
server.js
package.json
data/
  ├─ paintings-nested.json
  ├─ artists.json
  └─ galleries.json
README.md
```

---

# 🎨 PAINTINGS API — Example Test Requests

### All paintings  
https://three612-assignment-3.onrender.com/api/paintings-nested

### Painting by ID (valid)  
https://three612-assignment-3.onrender.com/api/painting/433

### Painting by ID (invalid)  
https://three612-assignment-3.onrender.com/api/painting/43374534856

### Paintings by Gallery ID (valid)  
https://three612-assignment-3.onrender.com/api/painting/gallery/7

### Paintings by Gallery ID (invalid)  
https://three612-assignment-3.onrender.com/api/painting/gallery/43374534856

### Paintings by Artist ID (valid)  
https://three612-assignment-3.onrender.com/api/painting/artist/106

### Paintings by Artist ID (invalid)  
https://three612-assignment-3.onrender.com/api/painting/artist/43374534856

### Paintings in Year Range (valid)  
https://three612-assignment-3.onrender.com/api/painting/year/1850/1900

### Paintings in Year Range (invalid)  
https://three612-assignment-3.onrender.com/api/painting/year/2200/2400

### Paintings by Title Search (valid)  
https://three612-assignment-3.onrender.com/api/painting/title/self

### Paintings by Title Search (invalid)  
https://three612-assignment-3.onrender.com/api/painting/title/dfjkghdfkgh

### Paintings by Dominant Color (valid)  
https://three612-assignment-3.onrender.com/api/painting/color/NAPA

### Paintings by Dominant Color (valid with space)  
https://three612-assignment-3.onrender.com/api/painting/color/coffee%20bean

### Paintings by Dominant Color (invalid)  
https://three612-assignment-3.onrender.com/api/painting/color/kcvhvxchbkcj

---

# 🧑‍🎨 ARTISTS API — Example Test Requests

### All artists  
https://three612-assignment-3.onrender.com/api/artists

### Artists by Country (valid uppercase)  
https://three612-assignment-3.onrender.com/api/artists/FRANCE

### Artists by Country (valid lowercase)  
https://three612-assignment-3.onrender.com/api/artists/france

### Artists by Country (invalid)  
https://three612-assignment-3.onrender.com/api/artists/sdfjjsdf

---

# 🏛 GALLERIES API — Example Test Requests

### All galleries  
https://three612-assignment-3.onrender.com/api/galleries

### Galleries by Country (valid)  
https://three612-assignment-3.onrender.com/api/galleries/france

### Galleries by Country (invalid)  
https://three612-assignment-3.onrender.com/api/galleries/kcvhvxchbkcj

---








