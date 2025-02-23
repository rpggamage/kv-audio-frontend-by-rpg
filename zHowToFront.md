# Day-09 (Frontend 01 Day) 😍
- npm create vite@latest
- npm install
- npm run dev

# Day-10 (Frontend 02 Day) 😍
 - **Apply more class is the tailwind theory** 
```
  <div className='test bod texcol'>
```
- [To install tailwind](https://tailwindcss.com/docs/installation/using-vite) 

- [New version 4 configuration](https://www.youtube.com/watch?v=HumgygfEK6s)
    npm install tailwindcss @tailwindcss/vite etc  

## Tailwindcss positioning
- sticky - you scroll, but I stay in given position
- fixed   - I do not care any one(div), I stay in the given position in the screen

-  absolute - Give me position I will stay in given position of my near "relative" parent
- relative - I will handle the my absolute child

    * w-[calc(100vw-450px)]  this is the function to calculate in TWind*

## Alignment
- flex 
- flex-col
- justify-center ====> experimental way
- items-center   ====> this will do you want 
## Admin panel
- [**To select react-icons**](https://react-icons.github.io/react-icons/)
    
- [**To install react-icons**](https://www.npmjs.com/package/react-icons)

- npm install react-icons

*helping suggestions for icon ,vs code extension "React Icons" by "Afzal"*

## React Route
- npm i react-router-dom
    <BrowserRouter></BrowserRouter>
    NOW CREAT A SITE MAP
       Example :
```js
<BrowserRouter>
    <Routes path="/*" >
    
    <Route path="/admin/*" element={<AdminPage />} />
    <Route path="/*" element={<HomePage />} />
    {/* <Route path="/*" element={<NotFound />} /> */}

    </Routes>
</BrowserRouter>
```
- ## **ctrl+shift+i is to see error from browser**
- ##  Then in page like admin page --> sub routing is there same as in home page

- ## you can use <a href= > tag for navigation but correct way is <Link to = >
# create "pages" folder 


- # install "power toys" from windows app stores 
- ## win+shift+t  for extracting text
- ## win+shift+c  for extracting color

- ## in LOGO sir make view by  object-cover 👍💕            
    <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] border-4 object-cover absolute left-1" /> 


# Day-12 (Frontend 04 Day) 😍

- ## HOOKs
- ## useState Example 👌
```js
import React, { useState } from "react";
export default function Testing(){
    //let count = 0;
    const [count,setCount]=useState(0);
    return(
        <div className="w-full h-screen">
            <h1>{count}</h1>
            <button onClick={() => {                
                setCount(count+1);
                }
                }>Increment</button>            
        </div>
    )
}
```


- ## fruit counter created in another branch

- ## login page back ground and again use of CSS by  sir is important (Watch day 12 - from 60 min )

- ## use forms and onSubmit function with prevent default 

- ## for API call from front end
    # npm install axios

- ## you cannot use "async" for component functions

- ## axios will give CORS error so you need to install CORS to backend 

- ## now we need https://react-hot-toast.com/ for alert message
- npm install react-hot-toast

- In app.jsx
    ```js
        function App() {
        return (
            <BrowserRouter>
            <Toaster/>

    ```
- ## I used LastPass for make login easy to localhost admin and user

# Day-13 (Frontend 02 Day) 😍

- ## Local storage in Browser is important 
- Key value pair
- key = string , value = string
```
// localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('user', res.data.token)
```            




















# Day 16 (Frontend 02 Day) 😍

## UI/UX Rules 

- ## 60-30-10 Rules
- ## 3 colors only 
- primary  = 60%  - Daraz LA ALU - ashe - light color god for eyes
- secondary = 30%  -
- Accent/Action    = 10%  - Daraz orange color - what is the color of daraz         
