import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store"; 

const rootElement =document.getElementById('root')
const root =createRoot(rootElement)
// 订阅store，然后更新整个App
store.subscribe(()=>{
    root.render(
        <App/>
    )
})
root.render(
    <App/>
)