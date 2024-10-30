import useFetch from '../src/useFetch'


const Movies=()=>{
    const {data, loading, error}=useFetch('http://localhost:3000/movies')

    console.log(data)
}

export default Movies