import axios from 'axios';
import React, { createContext, useState } from 'react'

export const LeilaoContext = createContext({});

export default function LeilaoProvider({ children }) {

    const url = "https://backendmobile-phi.vercel.app/leilao";

    function buscarLeilao() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setLeilao(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getLeilao", leilao);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)
        if (id) {
            axios.put(url + id, {
                marca: marca,
                ano: ano,
                modelo: modelo,
                cor: cor,
            }).then((resp) => atualizaListaLeilaoEditado(resp)).catch((erro) => console.log(erro));
        } else {
            axios.post(url, {
                marca: marca,
                ano: ano,
                modelo: modelo,
                cor: cor,
            }).then((resp) => atualizaListaLeilaoNovo(resp)).catch((erro) => console.log(erro));
        }
    }

    function atualizaListaLeilaoEditado(response) {

        let id = response.data.identificador;
        const { marca, ano, modelo, cor } = JSON.parse(response.config.data);
        const index = leilao.findIndex(item => item.id == id);

        let users = leilao;

        users[index].marca = marca;
        users[index].ano = ano;
        users[index].modelo = modelo;
        users[index].cor = cor;
        setLeilao(users);

        let usuario = {};
        usuario.id = id;
        usuario.marca = marca;
        usuario.ano = ano;
        usuario.modelo = modelo;
        usuario.cor = cor;
        setAtualizacao(usuario);

    }

    function atualizaListaLeilaoNovo(response) {
        console.log("atualizaListaLeilaoNovo", response.data);

        let { id, marca, ano, modelo, cor } = response.data;
        let obj = { "id": id, "marca": marca, "ano": ano, "modelo": modelo, "cor": cor };
        let users = leilao;
        users.push(obj);

        setLeilao(users);
        setAtualizacao(obj);
    }

    function apagarLeilao(cod) {
        axios.delete(url + cod)
            .then(() => {
                setLeilao(leilao.filter(item => item.id !== cod));
            })
            .catch((erro) => console.log(erro))
    }




    const [id, setId] = useState("");
    const [marca, setMarca] = useState("");
    const [ano, setAno] = useState("");
    const [modelo, setModelo] = useState("");
    const [cor, setCor] = useState("");
    const [leilao, setLeilao] = useState([]);
    const [atualizacao, setAtualizacao] = useState([]);

    return (
        <LeilaoContext.Provider value={{ id, marca, ano, modelo, cor, leilao, atualizacao, setId, setMarca, setAno, setModelo, setCor, buscarLeilao, setLeilao, gravarDados, setAtualizacao, apagarLeilao }} >
            {children}
        </LeilaoContext.Provider>
    )
}