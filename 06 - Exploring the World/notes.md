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