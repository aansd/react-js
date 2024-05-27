import {useState} from "react";

export const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }
    const handleMinus = () => {
        if(value > 0)
        setValue(value - 1);
    }
    return(
        <div>
            <h1>Membuat Component dengan functional Component</h1>
            <h2>Hallo {nama} Selamat Belajar </h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>     
    ) 
}
FunctionalComponent.defaultProps = {
    nama: 'User'
};

export default FunctionalComponent;