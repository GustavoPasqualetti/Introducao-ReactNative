import { useEffect, useState, } from "react";
import { BoxInput } from "../../components/BoxInput"
import { ContainerForm, ContainerUF, ScrollForm } from "./styles"
import axios from "axios";



export function Home() {

    
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});

    const [estado, setEstado] = useState()


    const getCep = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setEndereco(response.data)

            const estado = await axios.get (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${response.data.uf}`)
            setEstado(estado.data.nome);
            
        } catch (error) {
            console.error
            
        }
    };

    function limparCep() {
        setEndereco({}), setEstado({})
    }



    return (


        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o CEP"
                    placeholder="Cep..."
                    keyType="numeric"
                    maxLenght={9}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={text => setCep(text)}
                    onBlur={cep ? getCep : limparCep}
                />
                <BoxInput

                    textLabel="Logradouro"
                    placeholder="Logradouro..."
                    fieldValue={endereco.logradouro}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={endereco.bairro}
                />
                <BoxInput

                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={endereco.localidade}
                />
                <ContainerUF>
                    <BoxInput
                        fieldWidht={60}
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldValue={estado}
                    />
                    <BoxInput
                        fieldWidht={25}
                        textLabel="UF"
                        placeholder="UF"
                        fieldValue={endereco.uf}
                    />
                </ContainerUF>
            </ContainerForm>
        </ScrollForm>
    )
}