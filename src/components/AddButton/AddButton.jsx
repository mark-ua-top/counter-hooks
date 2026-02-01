export const AddButton = ({ setCount }) => {
    return (
        <button onClick={() => setCount(prev => prev + 1)}>+1</button>
    );
};
