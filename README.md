POE Part-2
Food App for chef Christoffel
A React Native Expo app that lets users view a food menu and allows chefs to edit and add new menu items dynamically.


https://github.com/VCCT-MAST5112-2025-G1/ST10469669_MastPOE

Screens

Welcome – Introduction screen 

Menu – View categorized menu with dropdown selection and Item count

Edit – Add new menu items dynamically

Technology used:

React Native

TypeScript

React Navigation

Expo

React Native Picker

Custom component-based architecture

FAQ
Question 1
What is this app for?

Answer

This app is designed to help chefs and restaurant managers easily create, edit, and view a digital menu. It allows adding menu items with a name, description, category (e.g., Main, Dessert, Drinks), and price.

Question 2
How do I add a new menu item?

Answer

Navigate to the Edit Menu tab

Enter the item name, description, select a category (Main, Dessert, Drink), and set the price.

Tap "Add to Menu" to save the item.

Question 3
How do I view my full menu?

Answer

Go to the Menu tab.

Use the dropdown to filter by category.

Items are grouped and displayed with their name and price.

Features
Browse menu items by category (Main, Dessert, Drinks)
Add new menu items with name and price
Tab navigation with icons using emojis
Background images for an appealing UI

YouTube Video link:

https://youtu.be/8A35zSZlijk?si=bKGT0j1Oz7M1lpmO



Screenshots


<img width="292" height="519" alt="image" src="https://github.com/user-attachments/assets/5ed65042-54f9-4c99-96ae-de70d18cba14" />
<img width="290" height="515" alt="image" src="https://github.com/user-attachments/assets/16052d3c-6c8c-4411-b068-11c29559a87a" />
<img width="285" height="506" alt="image" src="https://github.com/user-attachments/assets/aa616fd0-f201-4835-bfe4-e3bdfa82ced5" />
<img width="288" height="511" alt="image" src="https://github.com/user-attachments/assets/86992974-957f-47e8-964f-6d6556da0c6f" />
<img width="343" height="610" alt="image" src="https://github.com/user-attachments/assets/dba268fa-1057-497c-968b-af2530949068" />




Reference list

React native.n.d. ReactNative [Online] Available at: <https://reactnative.dev/docs/getting-started >

[Accessed 21 October 2025]

Expo.n.d. Expo Documentation [Online] Available at: <https://docs.expo.dev/get-started/start-developing/ >

[Accessed 22 October 2025]

Pinterest,2025. Pinterest [Online] Available at:<https://za.pinterest.com/maenhussein/cartoon-chef/ >

[Accessed 22 October2025]

AI Dislosure

Section were AI was used:

The FAQ and the app discription. also the links of the reference link.

AI Tool ChatGPT5

Purpose:

i asked ai to give me a more grammer correct sentencing. and also to sturcture the words for me.

Dates used: 21/10/2025-22/10/2025

prompts used:

"can you make a read me for my food app"

Conversation screenShot:

<img width="586" height="506" alt="image" src="https://github.com/user-attachments/assets/5926c8d2-3d20-4a1d-9778-1d4ece000352" />



POE Part 3

https://github.com/VCCT-MAST5112-2025-G1/ST10469669_MastPOE

Changes I made:

- I deleted the drop down.

- Deleted the edit button on the menu screen.

- Added an alert message on the menu screen before adding.

- Added an alert message on the edit screen.

- added a filter on the menu screen.
  
  WelcomeScreen.tsx

A classy intro scene that sets the tone — featuring a background of the chef himself and a welcoming message.

A perfect place to start your culinary coding adventure.

MenuScreen.tsx

The digital dining room.
Here, you can:

View all dishes in a stylish FlatList

Filter by category

Delete items with a smooth Alert confirmation.

EditScreen.tsx

Enter name, price, and category

Confirm your action through an Alert

YouTube video link for code explanation:

https://youtu.be/7iDCA4fblno?si=arN6zWzuP_jxssSz

Youtube video link for app demnstration:

https://youtube.com/shorts/7fgHzTQzzho?si=c76qPWP2pWgYR8Pu

I did not show how the fileter by category in the video but it works

<img width="259" height="461" alt="image" src="https://github.com/user-attachments/assets/d4818a94-83b9-4266-bd8f-70bd66de0aee" />

Technology used:

React Native

TypeScript

React Navigation

filter

vector icons


Project structure:





  









