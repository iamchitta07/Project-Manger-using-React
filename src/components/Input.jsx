const Input = ({label,  isTextArea, ...props }) => {
    const MyComponent = isTextArea ? "textarea" : "input";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor={label} className="text-sm font-bold uppercase text-stone-500">{label}</label>
            <MyComponent id={label} className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props} />
        </p>
    );
};

export default Input;
