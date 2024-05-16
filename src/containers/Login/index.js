import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from '../../services/api'
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext'
import {Link} from 'react-router-dom'
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
    const {putUserData} = useUser()


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

    const onSubmit = async Data => {
       
        const {data} = await toast.promise(
         api.post('sessions', {
            email: Data.email,
            password: Data.password
        }),{
            pending: 'Verificando seus dados',
            success: 'Seja bem vindo(a) 👌',
            error: 'Verifique seus dados 🤯'
        }
    )
    putUserData(data) 
    
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
                    Não possui conta? <Link style={{color:'white'}} to = "/cadastro" >Sign Up</Link>
                </SignLink>

            </ContainerItens>

        </Container>
    )
}
export default Login