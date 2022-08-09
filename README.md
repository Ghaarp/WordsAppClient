# WordsApp
## React application 

## Important info!
  You can see current version [here](https://ghaarp.github.io/WordsAppClient "WordsApp"). The backend is hosted on the Heroku platform, which forces applications to sleep if they have not been used for a while. This is why the first request in the application can take a long time to process (10-20 seconds). Just be patient! 

### Overall
  WordsApp is an application for self-studying. The main function of the application is to help you learn english words that you have problems with. When you translate a word or an idiom in Wordsapp, you can see all additional information about them. The application shows you all translations, synonyms, frequency of use, examples and images to make understanding and memorization easier.

### About cards in application
  You can form your own card list and revise it in the application. After any translation search, you can select the information you prefer by marking it with flags and save it as a card. You can also select the main image for a card that you will see as a hint in cards list. 
  
### About cards list
  In a card list you can only see the english words and all other data is hidden. You can click on a lock on the left side of a card to see a hint image. After you recall a translation, you can click on the button in the bottom part of a card to see the correct translation. Besides, you can revise previously saved data of a word after clicking on the "i"-button on the right side of a card. If you don't need a card anymore, you can delete it from the list by clicking the "x"-button in the top-right corner.
  
### About friends
  The application has an option to add other users in a study list. If you add another user in your friendlist, the user will see an invitation. If the invitation is accepted, the two users may share their cards with each other. To do so, they need to select this option in their friends menu. You can always choose to see only your own cards in the list or to see all cards shared with your friends. 
  
### Application architecture
  The application is built with adaptive architecture, but it has limitations of minimum and maximum width and height. React components only show data and relay commands to mobx stores. The stores make requests and collect data for components to display. All side logic with received data is moved to helpers, and is called from mobx stores if necessary.
  
### About card architecture
  The most complicated part of the application is the card data tree. The card data rendering framework is hosted in src/components/translation/result/TranslationTreeElement.jsx.
It is a recursive element that builds other elements based on received data. There is a different number of layers in a different parts of translations, thats why we need this element to be recursive.
  
  Received translation data is stored in the mobx store src/store/TranslationStore.js. After receiving the translation data, helpers mark each element with a unique ID and checkmarks, and then it goes to render. IDs help to bind each tree element to a component, which helps to recursively choose only elements that the user wants to save.
  
  When the user clicks the "save card" button, mobx store generates JSON file via helper based on marked elements, and sends this file to the server to be saved in BD.
  
### Why I made this application
  The main purpose of making this app was to practice web development. In particular, while making this app, I have learned a lot about React hooks, components decomposition and JS syntax. I have finished an html/css3 course right before starting to make this app, and one of the main goals was to practice CSS. That is why I made all the styles myself instead of using existing UI libraries.
