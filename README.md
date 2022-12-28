**To Install Recoil**


    npm install recoil
    yarn add recoil 

 1. import Recoil Root in top most of the Ap


    ```
    import  {RecoilRoot}  from  'recoil'
    ```

 2. Wrapper it


    ```
    <RecoilRoot> 
        <App /> 
    </RecoilRoot>
    ```
 3. Create Atom

    
    1. Create Separate Folder "Recoil"
    2. Create File "atom"

    ```
    import {atom} from 'recoil'

    export const stateValue = atom({
        key : "stateValue", // unique ID (with respect to other atoms/selectors)
        default : 0, // default value (aka initial value)
    })
    ```

4. To Access State and Update State


    1. Import useRecoilState and atom

    ```
    import {useRecoilState} from 'recoil'
    import {stateValue} from './Recoil/atom'
    ```

    2. To Access State and Update State

    ```
    const [state, setState] = useRecoilState(stateValue)

    <button onClick={()=>setState((prev)=>prev+1)}>App</button>
    ```

