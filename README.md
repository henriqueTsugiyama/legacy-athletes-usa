# Legacy Athletes USA 🏃‍♂️

A modern, bilingual landing page for Legacy Athletes USA, featuring seamless English-Spanish translation powered by React Redux state management.

![JavaScript](https://img.shields.io/badge/JavaScript-68.2%25-yellow)
![CSS](https://img.shields.io/badge/CSS-29.8%25-blue)
![HTML](https://img.shields.io/badge/HTML-2%25-orange)

## 🌟 Overview

Legacy Athletes USA is a responsive landing page designed to showcase the company's services and engage potential clients. The site features a dynamic language switching system that demonstrates advanced state management techniques using Redux.

## ✨ Key Features

- **🌐 Bilingual Support**: Instant translation between English and Spanish using React Redux for seamless state management
- **📱 Responsive Design**: Fully responsive layout that works across all device sizes
- **📧 Contact Form**: Integrated email functionality that sends notifications when users submit inquiries
- **🎨 Modern UI**: Clean, professional design built with custom CSS
- **⚡ Fast Performance**: Optimized vanilla React application with minimal dependencies

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux (State Management for language switching)
- JavaScript (ES6+)
- CSS3 (Custom styling)
- HTML5

**Features:**
- Redux state management for global language state
- Form handling with email integration
- Component-based architecture

This creates an optimized production build in the `build` folder.

## 🌍 Language Translation Feature

The application uses Redux to manage language state across all components. When users switch between English and Spanish, the entire interface updates instantly without page reloads.

### Implementation Highlights:

- **Redux Store**: Centralized language state management
- **Action Creators**: Clean language switching logic
- **Reducers**: Predictable state updates
- **Connected Components**: Seamless integration throughout the app

```javascript
// Example of language switching
dispatch(changeLanguage('es')); // Switch to Spanish
dispatch(changeLanguage('en')); // Switch to English
```

## 📧 Contact Form

The contact form at the bottom of the page includes:
- Form validation
- Email submission functionality
- User feedback on successful submission
- Error handling

## 🎯 Project Purpose

This project demonstrates:
- Proficiency in React and Redux state management
- Ability to implement practical features like internationalization (i18n)
- Modern frontend development practices
- Responsive design implementation
- Form handling and user interaction

## 📂 Project Structure

```
legacy-athletes-usa/
├── public/
├── src/
│   ├── components/     # React components
│   ├── redux/          # Redux store, actions, reducers
│   ├── styles/         # CSS files
│   ├── translations/   # Language data (EN/ES)
│   └── App.js          # Main application component
├── package.json
└── README.md
```

## 🔮 Future Enhancements

- [ ] Add more language options (Portuguese, French)
- [ ] Implement backend API for contact form
- [ ] Add animation transitions during language switching
- [ ] Integrate analytics to track language preferences
- [ ] Add CMS integration for content management

## 👨‍💻 Author

**Henrique Tsugiyama**

Full Stack Software Engineer | React, Node.js, Python, TypeScript | Data Science & AI Enthusiast

- GitHub: [@henriqueTsugiyama](https://github.com/henriqueTsugiyama)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Legacy Athletes USA for the opportunity to build their digital presence
- React and Redux communities for excellent documentation

---

⭐ If you found this project interesting, please consider giving it a star!
