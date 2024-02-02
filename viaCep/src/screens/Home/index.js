import { useEffect, useState, } from "react";
import { BoxInput } from "../../components/BoxInput"
import { ContainerForm, ContainerUF, ScrollForm } from "./styles"
import axios from "axios";




export function Home() {

    
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState({});


    useEffect(() => {
        if (cep) {
            getCep();
        } else {
            limparCep();
        }
    }, [cep])

    const getCep = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setEndereco(response.data)
            
        } catch (error) {
            console.error
            
        }
    };

    function limparCep() {
        setEndereco({})
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
                        fieldValue={endereco.uf}
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