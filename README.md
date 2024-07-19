# Search-App

Hello everybody! 👋 </br>
✨ Welcome to the **Image Search Application**! This project utilizes JavaScript and the Fetch API to provide a dynamic image search experience. Users can search for images by entering keywords into a search box, and relevant images will be fetched and displayed in real-time.

## 👀 Overview

### 📷 Screenshot

![screencapture-127-0-0-1-3000-Search-App-index-html-2024-07-19-12_27_56](https://github.com/user-attachments/assets/bf2a11ec-cd96-4ab4-8905-34a3dd3b640c)


![screencapture-127-0-0-1-3000-Search-App-index-html-2024-07-19-12_28_35](https://github.com/user-attachments/assets/f453eb93-2c49-490d-97f3-17336fb31fc9)

### 🔗 Links

- https://tucecifci.github.io/Search-App/

## My process

### 💡 Built with

- JavaScript: Core language for implementing application logic and interacting with the DOM.
- Fetch API: Used for making HTTP requests to an external image service.
- HTML: Structure and layout of the application.
- CSS: Styling the application for a better user experience.
  
### 🧠 What I learned

- Fetch API: Gained hands-on experience with the Fetch API to make asynchronous network requests and handle responses.
- DOM Manipulation: Improved skills in dynamically updating the DOM based on user interactions.
- Error Handling: Implemented error handling to manage issues that may arise during API requests.
- Event Handling: Enhanced understanding of event handling for user inputs and interactions.

```javascript
  function search(e) {
  const value = searchInput.value.trim(); 
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 35VEGk6Ij1urjvjrwZi0XNSpjBvKZnIbFGEF41vNH8U",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        addImageToUi(image.urls.small);
      });
    })
    .catch((err) => console.log(err));
```

### 👩🏼‍💻 Features

- Real-time Search: As users type their query, results are fetched and displayed without needing to refresh the page.
- Fetch API: Utilizes the Fetch API to communicate with an external image service and retrieve image data.
- Dynamic Image Display: Images are dynamically rendered on the page based on the search query.
- Responsive Design: The application is designed to be responsive and user-friendly on various devices.

  
### 🤔 How to Use

1. Open the `index.html` File:
   - Open the `index.html` file in your web browser.

2. Perform a Search:
   - Type a keyword into the search input field.
   - Click the "Search" button or press the "Enter" key to fetch and display images related to your query.

### API Integration

This project uses the [Unsplash API](https://unsplash.com/developers) for fetching images. To integrate the API:

1. Get an API Key:
   - Sign up on Unsplash and obtain an API key.

2. Configure API Key:
   - Replace `YOUR_UNSPLASH_API_KEY` in the `script.js` file with your actual API key.

### 🤌🏻 Useful resources

- https://www.youtube.com/watch?v=UvTGbI8FYp0&list=PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht&index=112)

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
