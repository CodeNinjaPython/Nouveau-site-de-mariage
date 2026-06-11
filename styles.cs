body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

header {
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

header nav ul {
  list-style: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 15px;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
}

section {
  padding: 2rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gallery img {
  width: 30%;
  margin: 1%;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}

form {
  max-width: 600px;
  margin: auto;
}

form label {
  display: block;
  margin: 10px 0 5px;
}

form input, form textarea, form button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: relative;
  margin-top: 20px;
}