import axios from "axios";

export default class API{
    async Listar(link){
        const {data} = await axios.get(link)
        return data
    }
    async Criar(link, item){
        const {data} = await axios.post(link, item)
        return data.results
    }
    async Atualizar(link, item){
        const {data} = await axios.patch(link, item)
        return data
    }
    async Deletar(link){
        const {data} = await axios.delete(link)
        return data.results
    }
}