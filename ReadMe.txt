# **Exercise brief**

We would like you to build a React app that connects to a movie and/or tv show open API that:

- shows a list of the latest movies
- allows me to search for the title of their favorite show or display a list of all results
- shows all the genres in the menu
- clicking on a genre takes a user to a new page that shows a list of filtered movies for the selected genre
- allows users to sort the results and to filter based on several filters
- users should be able to favorite some shows and have them available after they restart the browser.
- as the user scrolls down the page a new set of movies is loaded (infinite scroll)
- clicking on a movie takes the user to the detail page

## **Requirements**

- Must use the latest version of React
- Must have Server-side rendering
- Must use Typescript
- Must use SASS/SCSS
- API keys should not be hardcoded in the TS files
- The project should contain linting config
- The project should contain formatting config
- As a user, I should be able to search for a title
- As a user, I should be able to filter by year of release and by genre
- As a user, I should be able to sort by name, year of release
- As a user, I should be able to access movies for a specific genre by URL:
    - example: `/genres/comedy`
- As a user, I should be able to access a movie detail page by URL:
    - example: `/movies/the-lord-of-the-rings-the-two-towers`
- As a user, I would like to be able to favorite several titles and I would like those favorites to persist in the browser (local is sufficient, no need for external APIs)
- My favorites should be accessible on a different route

## **Nice to haves**

- Unit tests
- Show movie poster
- User (local) system - Every user to have their own favorites
- Custom styling
- A favicon
- Github readme file
- App deployed to some free hosting like Netlify or Vercel

## **Deliverables**

A Github repository that we can **clone, install, build and run locally**. You can expect us to have a git client, NodeJS, and NPM/Yarn installed and properly configured, no other dependencies should be required.

## **Miscellaneous**

### **The following choices are up to the person doing the exercise:**

- Yarn or NPM
- State manager
- UI Framework
- Movie/Shows API provider
- For Server-side rendering, we use Next.js but other libraries or methods are welcome

### **What languages should the interface be in?**

English only
