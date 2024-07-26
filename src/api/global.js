import axios from "axios";

export default class API{
    async Listar(link){
        const {data} = axios.get(link)
        return data
    }
    async Criar(link, item){
        const {data} = axios.post(link, item)
        return data.results
    }
    async Atualizar(link, item){
        const {data} = axios.patch(link, item)
        return data
    }
    async Deletar(link){
        const {data} = axios.delete(link)
        return data.results
    }
}