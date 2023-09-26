// rafce cria o começo do componente, o import, a const e o export do final da tela


const Search = ({ search, setSearch }) => {
    return (
        <div className='search'>
            <h2>Pesquisar:</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite para pesquisar..."
            />
        </div>
    )
}

export default Search