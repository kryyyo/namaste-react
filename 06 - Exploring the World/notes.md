Monolith Architecture
- all code are inside one project
![monolith-architecture](image.png)

Microservices
- different small projects work together as a whole
- has separation of concerns and single responsibility principle
- each of the service has its single responsibility
![microservices-architecture](image-1.png)
![microservices-talking-to-each-other](image-2.png)

- can also have different language using
![microservices-with-own-language](image-3.png)

- can also run on their own specific ports
- eg. :1234 - UI Service, :1000 - BE, :3000 - SMS

- different ports can also be deployed differently in their own domain name
- eg: / -> UI, /api -> BE, /sms -> SMS


2 Approaches to fetch data from BE
![2-approaches-to-fetch-data](image-4.png)
- number 2 approach is better in React, and we will always use this in React
- even if it has rerender, React can handle this very fast!
- number 2 also has better UX


CORS Policy
- our *browser* is the one blocking us to call from one origin (Swiggy) to another origin (localhost)
- browser security
- different domains and even different protocols are not allowed:
![some-of-the-things-that-are-not-allowed-due-to-CORS-policy](image-5.png)
- but because we are now using microservices these days, resource sharing must be allowed and standardized, and this is where CORS (Cross Origin Resource Sharing) comes into place

How CORS works?
- a preflight option called is made before the actual api call
![how-api-is-called-with-CORS](image-6.png)

Additional HTTP headers (commonly used)
1. [access-control-allow-origin: *] -> (star) any domain outside of its domain can access this
  eg. if https://akshaysaini.in is inside this star, it will now be allowed to make an api call in origin 2
  ![origin-1-can-now-access-origin-2](image-7.png)

Preflight requests are not always done, it is depending on the browser if it will tag the request as a simple api call

Shimmer UI
- https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17
- loading a fake page (skeleton) til the data is loaded

Why do we need state variables?
- this is so React can keep track on what is changed, making it more efficient in reconciliation and dom manipulation
- whenever state variables update, react triggers a reconciliation cycle (re-renders the component)