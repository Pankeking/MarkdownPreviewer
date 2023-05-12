import React, {useState} from "react";

function InputComp({ onChange, InitText }) {


    const [inputValue, setInputValue] = useState(InitText);

    const handleChange = (event) => {
        const newText = event.target.value;
        setInputValue(newText);
        onChange(newText);
    };

    return (
        <div className="w-100 p-1 m-auto fs-5">
            <textarea
                id="editor"
                className="input"
                type="text"
                value={inputValue}
                onChange={handleChange}
            >
            </textarea>
        </div>

    )
}
export default InputComp;