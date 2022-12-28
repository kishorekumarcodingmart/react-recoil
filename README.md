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

-----------------------------------------------------------------------------------
**Hooks**

1. useRecoilState(state)

Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called.

    ```
    const [state, setState] = useRecoilState(stateValue)

    <button onClick={()=>setState((prev)=>prev+1)}>App</button>
    ```

2. useRecoilValue(state)

Returns the value of the given Recoil state.

    ```
    import { stateValue } from './Recoil/atom'

    import { useRecoilValue } from "recoil";

    const state = useRecoilValue(stateValue);
    ```

3. useSetRecoilState(state)

Returns a setter function for updating the value of writeable Recoil state.

    ```
    import { useSetRecoilState } from 'recoil';

    import { stateValue } from './Recoil/atom'

    const setState = useSetRecoilState(stateValue)
    ```

4. useResetRecoilState(state)

Returns a function that will reset the value of the given state to its default value.

    ```
    import { useResetRecoilState } from 'recoil';

    import { stateValue } from './Recoil/atom'

    const reset = useResetRecoilState(stateValue)

    const funcToReset = () => {
        reset()
    }

    ```
