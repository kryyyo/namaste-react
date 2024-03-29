React Router DOM
- npm i react-router-dom

Creating routes
1. Create routing configuration on the root file
![initial-routing-configuration](image.png)
![initial-routing-configuration-2](image-1.png)
2. Render the Router Provider from react-router-dom to use your routing configuration
![rendering-the-router-provider](image-2.png)

When there is no path that is provided in your configuration:
![error-page-404](image-3.png)
- react-router-dom provides this error page for you

Creating your own error page
1. create error page component
2. add errorElement on the object inside the routing configuration
![error-element](image-4.png)
![sample-custom-error-page](image-5.png)

useRouterError
- Important hook provided by react-router-dom to provide more details about the error
![using-use-router-error](image-6.png)
![what-the-error-details-are](image-7.png)