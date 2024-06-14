import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import {Button,ErrorMessage} from '../../components'
import RegisterImg from '../../assets/hamburger-register.jpg'
import Logo from '../../assets/burger-logo.svg'
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignLink
} from './styles'

 export function Register() {

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
            .oneOf([yup.ref('password')],'As senhas devem ser iguais.')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
       try{
        const{status} =  await api.post('users', {
            name: data.name,
            email: data.email,
            password: data.password
           },
           {validateStatus: () => true}
        )
          if(status===201 || status ===200){
           toast.success('Cadastro com sucesso!')
          } else if(status ===400 || status === 401){
            toast.error('E-mail já cadastrado! Tente novamente')
          } else{
            throw new Error()
          }
       }catch(err) {
        toast.error('Falha no sistema! Tente novamente')
       }
    
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt='register-burger-foto' />
            <ContainerItens>

                <img src={Logo} alt='Logo-img' />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)} >

                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type="text"  {...register("name")}
                        error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email" {...register("email")}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Senha</Label>
                    <Input type="password" {...register("password")}
                        error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message} >Confirmar Senha</Label>
                    <Input type="password" {...register("confirmPassword")}
                        error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 25 }} >
                        Sign Up
                    </Button>
                </form>
                <SignLink>
                    Já possui conta? <Link style={{color:'white'}} to = "/login" >Sign In</Link>
                </SignLink>

            </ContainerItens>

        </Container>
    )
}
