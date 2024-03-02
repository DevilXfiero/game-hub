import axios from "axios";


export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a4427bb617b241409a4630f969fdaa3d'
    }
})