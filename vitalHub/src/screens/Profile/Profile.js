import { BoxInput } from "../../components/BoxInput"
import { ContainerProfile, ContainerScroll, ContainerUF } from "../../components/Container/Style"
import { TextAdd } from "../../components/TextAdd/Style"
import { Title } from "../../components/Title/Style"
import { UserPicture } from "../../components/UserPicture/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Button, Button2 } from "../../components/Button/Style"
import { useState } from "react"

export const Profile = () => {

    const [ProfileEdit, setProfileEdit] = useState()

    return (
        <ContainerScroll>
            <UserPicture source={require('../../assets/paciente.png')} />
            <ContainerProfile>
                <Title>Richard Kosta</Title>
                <TextAdd>22 anos      richard.kosta@gmail.com</TextAdd>

                <BoxInput
                    fieldWidht={80}
                    textLabel='Data de nascimento:'
                    placeholder='04/05/1999'   
                    fieldHeight={60}     
                />
                <BoxInput
                    fieldWidht={80}
                    textLabel='CPF:'
                    placeholder='859********'
                    fieldHeight={60}  
                />
                <BoxInput
                    fieldWidht={80}
                    textLabel='Endereço'
                    placeholder='Rua Vicenso Silva, 987'
                    fieldHeight={60}  
                />
                <ContainerUF>
                    <BoxInput
                        fieldWidht={45}
                        textLabel='CEP'
                        placeholder='06548-909'
                        fieldHeight={60}  
                    />
                    <BoxInput
                        fieldWidht={45}
                        textLabel='Cidade'
                        placeholder='Moema-SP'
                        fieldHeight={60}  
                    />
                </ContainerUF>


                <Button>
                    <ButtonTitle>SALVAR</ButtonTitle>
                </Button>

                <Button2>
                    <ButtonTitle>EDITAR</ButtonTitle>
                </Button2>

            </ContainerProfile>
        </ContainerScroll>
    )
}