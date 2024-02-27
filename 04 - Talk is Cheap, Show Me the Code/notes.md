First thing: PLAN
1. UI Design/Mock even scratch - You should exactly know what you would build. How your app should look like
2. Low-level planning - what components can my app have
    -![low-level-planning](image.png)
3. Start Coding

props
- short for 'properties'
- props are just normal arguments to a function!'
- for passing dynamic data
- example: ![props](image-1.png)
- passing in the functional component:
    ![props-in-functional-component](image-2.png)
    ![logging-of-props](image-3.png)


Config-Driven UI
- website is driven by data
- eg. different carousel for different locations
- sample config from backend:
```
"cards": [
  {
    "cardType": "carousel",
    "layoutAlignmentType": "VERTICAL",
    "data": {},
    "parentWidget": false
  },
  {
    "cardType": "carousel",
    "layoutAlignmentType": "VERTICAL",
    "data": {},
    "parentWidget": false
  },
  {
    "cardType": "seeAllRestaurants",
    "layoutAlignmentType": "VERTICAL",
    "data": {},
    "parentWidget": false
  }
]
```

Cloudinary
- a CDN for image hosting

key in mapped component
- should always have a key property whenever you are looping in an array and returning a functional component (mapping)
- key={<unique identifier>}
- important for sorting, for rerendering optimization
![no-key-rerendering](image-5.png)
- React will know that the component is already existing if there is a key to prevent double rendering
- DO NOT USE `index` (2nd property of the map array) as key! https://dev.to/shiv1998/why-not-to-use-index-as-key-in-react-lists-practical-example-3e66