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