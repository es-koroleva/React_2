import {useState} from "react";
import './App.css';

function App() {
    let [counter, setCounter] = useState(0);           //counter - переменная, setCounter - функция, которую можно видоизменять
    const handleInc = () => {                                    //функция для клика
        setCounter(counter + 1);
    };
    const handleDec = () => {
        if (counter <= 0) {
            counter = 0;
        } else {
            setCounter(counter - 1);
        }
    };
    const handleMul = () => {
        setCounter(counter * 2);
    };
    const handleDiv = () => {
        setCounter(counter / 2);
    };
    const handelSbros = () => {
        setCounter(counter = 0);
    };
    return (
        <div className="App">
            <div className={'container display-flex'}>
                <div className={'row justify-content'}></div>
                <div className={'col-12 col-md-6'}></div>
                <div className={'bg-light text-center p-2 display-6 mb-2'}></div>
                Pro <b>Counter</b>
            </div>
            <div className={'display-1 text-center my-5 py-5'}>
                {counter}
                <div className={'row'}>
                    <div className={'col'}>
                        <button className={'btn btn-primate w-100'} onClick={handleInc}>
                            Увеличить
                        </button>
                    </div>
                    <div className={'col'}>
                        <button className={'btn btn-success w-100'} onClick={handleDec}>
                            Уменьшить
                        </button>
                    </div>
                    <div className={'col'}>
                        <button className={'btn btn-success w-100'} onClick={handleMul}>
                            Умножить на 2
                        </button>
                    </div>
                    <div className={'col'}>
                        <button className={'btn btn-success w-100'} onClick={handleDiv}>
                            Разделить на 2
                        </button>
                    </div>
                    <div className={'col'}>
                        <button className={'btn btn-outline-danger w-100'} onClick={handelSbros}>
                            Сбросить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
