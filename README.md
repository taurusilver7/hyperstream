# Hyperstream

A popular movie & TV show video streaming service powered by React & styled with SASS.

## Scripts

```bash
yarn create react-app <app_name>
#and
cd <app_name>
#and
yarn start
# dependencies
yarn add react-router-dom sass query-string swiper axios
#end
```

## Build

- Refactor the started template to suit the application development process.

- Import [sass](https://sass-lang.com/install) and create the necessary directories for code-splitting.
- Import [axios](https://github.com/axios/axios) dependency to execute promise based http-requests & access the API.

- Import [swiper](https://swiperjs.com/react) or [swiper@6.8.4](https://www.npmjs.com/package/swiper/v/6.8.4) dependency, to add the animation swipe effect on the Header component.

- Set the routes between the pages in `config/Routes`.

### Home

- The Header component has elements that necessaties the navigation between Home & Catalog pages.

- The HeroSlide component displays a slide-show on the top movies spliced from the results array. For the Slider component to work in React 18, import `react@rc` and `react-dom@rc` instead of the generic libraries. Wrap the root component in createNode, instead of rendering the dom.

- The MovieList components slides various categories of movies/tv on the Home page. Each of the item in the component are rendered in MovieCard component, which holds the category & id of the item result. Each MovieCard navigates to the Details page of the item results.
- The footer component remains passive in the application

### Catalog

- The Catalog page has the list of movies/tv shows, a search component, a `load more` button and the footer text.

- The pageHeader followed the Header component, and displayed the Catalog category, with a opaque background.
- The Search component takes in an input with a `useRef()` and `useCallback()` hook to search for the query-string in the databaase/api.
- The MovieGrid component binds the Search, the array of MovieCards, and the load more button.
- The loadMore() function increments the page from the results, and request a new array of results from the api, which was then populated in MovieCard components to display on the Catalog page.

### Details

- The Details page has the detailed information of an item result, along with the trailers, and the cast information.
- All the MovieCards hold the category & item id, which leads to the Details page.
- The Header & footer components are stand-alone components, outside the routes.

- Pick the id & category of an item result from `useParams()` hook.
- Create an async fun in useEffect to get the item details from `tmdbApi` through the API. Set the window screen to top.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
