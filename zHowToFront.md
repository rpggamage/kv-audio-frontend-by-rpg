Day-09 (Frontend 01 Day) 😍
npm create vite@latest
    npm install
    npm run dev

Day-10 (Frontend 02 Day) 😍
 apply more class is the tailwind theory <div className='test bod texcol'>
 https://tailwindcss.com/docs/installation/using-vite 

 https://www.youtube.com/watch?v=HumgygfEK6s

 npm install tailwindcss @tailwindcss/vite
 etc
## position
    sticky - you scroll, but I stay in given position
    fixed   - I do not care any one I stay in the given position in the screen

    absolute - Give me position I will stay in given position of my near "relative" parent
    relative - I will handle the my absolute child

    w-[calc(100vw-450px)]  this is the function to calculate in TWind

## alignment
    flex 
    flex-col
    justify-center ====> experimental way
    items-center   ====> this will do you want 
## Admin panel
    # icon to look
        https://react-icons.github.io/react-icons/
    
    # to install
        https://www.npmjs.com/package/react-icons

        npm install react-icons

        helping suggestions for icon ,vs code extension "React Icons" by "Afzal"
## React Route
    npm i react-router-dom
    <BrowserRouter></BrowserRouter>
    NOW CREAT A SITE MAP
       Example :
                <BrowserRouter>
                    <Routes path="/*" >
                    
                    <Route path="/admin/*" element={<AdminPage />} />
                    <Route path="/*" element={<HomePage />} />
                    {/* <Route path="/*" element={<NotFound />} /> */}

                    </Routes>
                </BrowserRouter>
#  ctrl+shift+i is to see error from browser
#  Then in page like admin page --> sub routing is there same as in home page

# you can use <a href= > tag for navigation but correct way is <Link to = >
# create "pages" folder 


install "power toys" from windows app stores 
# win+shift+t  for extracting text
# win+shift+c  for extracting color

# in LOGO sir make view by  object-cover 👍💕            
    <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] border-4 object-cover absolute left-1" /> 


Day-12 (Frontend 04 Day) 😍

# HOOK
/////////////////////////useState Example/////////////////////////////
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
////////////////////////////////////////////////////////////////////

