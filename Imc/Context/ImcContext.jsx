import axios from 'axios';
import React, { createContext, useState } from 'react'

export const ImcContext = createContext({});

export default function ImcProvider({ children }) {

    const url = "https://backendmobile-phi.vercel.app/imc/";

    function buscarImc() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setImc(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getImc", imc);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)
        if (id) {
            axios.put(url + id, {
                nome: nome,
                altura: altura,
                peso: peso,
                resultado: resultado,
            }).then((resp) => atualizaListaImcEditado(resp)).catch((erro) => console.log(erro));
        } else {
            axios.post(url, {
                nome: nome,
                altura: altura,
                peso: peso,
                resultado: resultado,
            }).then((resp) => atualizaListaImcNovo(resp)).catch((erro) => console.log(erro));
        }
    }

    function atualizaListaImcEditado(response) {

        let id = response.data.identificador;
        const { nome, altura, peso, resultado } = JSON.parse(response.config.data);
        const index = imc.findIndex(item => item.id == id);

        let users = imc;

        users[index].nome = nome;
        users[index].altura = altura;
        users[index].peso = peso;
        users[index].resultado = resultado;
        setImc(users);

        let usuario = {};
        usuario.id = id;
        usuario.nome = nome;
        usuario.altura = altura;
        usuario.peso = peso;
        usuario.resultado = resultado;
        setAtualizacao(usuario);

    }

    function atualizaListaImcNovo(response) {
        console.log("atualizaListaImcNovo", response.data);

        let { id, nome, altura, peso, resultado } = response.data;
        let obj = { "id": id, "nome": nome, "altura": altura, "peso": peso, "resultado": resultado };
        let users = imc;
        users.push(obj);

        setImc(users);
        setAtualizacao(obj);
    }

    function apagarImc(cod) {
        axios.delete(url + cod)
            .then(() => {
                setImc(imc.filter(item => item.id !== cod));
            })
            .catch((erro) => console.log(erro))
    }




    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState("");
    const [imc, setImc] = useState([]);
    const [atualizacao, setAtualizacao] = useState([]);

    return (
        <ImcContext.Provider value={{ id, nome, altura, peso, resultado, imc, atualizacao, setId, setNome, setAltura, setPeso, setResultado, buscarImc, setImc, gravarDados, setAtualizacao, apagarImc }} >
            {children}
        </ImcContext.Provider>
    )
}