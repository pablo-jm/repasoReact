function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>{contador}</h2>
            <button type="button" onClick={() => setContador(contador + 1)}>Sumar contador</button>
        </div>
    )
};

export default Contador;