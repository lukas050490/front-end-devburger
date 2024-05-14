import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'

import Button from '../../components/Button'
import LoginImg from '../../assets/burgerflesh.jpg'
import Logo from '../../assets/burger-logo.svg'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignLink,
    ErrorMessage
} from './styles'
function Login() {

    const schema = yup.object().shape({
        email: yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup.string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter no mínimo 6 digitos')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const response = await api.post('sessions', {
            email: data.email,
            password: data.password
        })
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt='burger-foto' />
            <ContainerItens>

                <img src={Logo} alt='Logo-img' />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)} >
                    <Label>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{marginTop:25}} >
                        Sign In
                        </Button>
                </form>
                <SignLink>
                    Não possui conta? <a href='http://localhost:301' >Sign Up</a>
                </SignLink>

            </ContainerItens>

        </Container>
    )
}
export default Login