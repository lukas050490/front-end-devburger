import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'

import Button from '../../components/Button'
import RegisterImg from '../../assets/burger-login (2).jpg'
import Logo from '../../assets/burger-logo.svg'
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignLink,
    ErrorMessage
} from './styles'
function Register() {

    const schema = yup.object().shape({
        name: yup.string()
        .required('O seu nome é obrigatório'),
        email: yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup.string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter no mínimo 6 digitos'),
        confirmPassword: yup.string()
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
        const response = await api.post('users', {
            name: data.name,
            email: data.email,
            password: data.password
            
        })
        console.log(response)
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt='register-burger-foto' />
            <ContainerItens>

                <img src={Logo} alt='Logo-img' />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)} >

                <Label>Nome</Label>
                    <Input type="text"  {...register("name")}
                        error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label>Confirmar Senha</Label>
                    <Input type="password" {...register("confirmPassword")}
                        error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{marginTop:25}} >
                        Sign Up
                        </Button>
                </form>
                <SignLink>
                    Já possui conta? <a href='http://localhost:3002' >Sign In</a>
                </SignLink>

            </ContainerItens>

        </Container>
    )
}
export default Register