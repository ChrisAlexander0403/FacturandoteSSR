import React from 'react';
import { SignUpForm, Info, Label, Input, Text, TextArea, SendInput, Error, Subtitle } from './DistributorAccessElements';
import useForm from './UseForm';
import ValidateInfo from './ValidateInfo';


export default function Form({submitForm}){
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,ValidateInfo);

    function formatInput(e){
        // Prevent characters that are not numbers ("e", ".", "+" & "-") 
        let checkIfNum;
        if (e.key !== undefined) {
          // Check if it's a "e", ".", "+" or "-"
          checkIfNum = e.key === "e" || e.key === "." || e.key === "+" || e.key === "-" ;
        }
        else if (e.keyCode !== undefined) {
          // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
          checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
        }
        return checkIfNum && e.preventDefault();
    }
    return(
        <SignUpForm>
            <form onSubmit={handleSubmit}>
                <Subtitle>¿Quieres ser parte de nuestro equipo de Distribuidores?</Subtitle>
                <Info>Mándanos tus datos y te contactaremos para que seas parte de nosotros.</Info>
                <Text>
                    <Label>Empresa o Razón Social</Label>
                    <Input 
                        id={'enterprise'}
                        type={'text'} 
                        placeholder={'Empresa'}
                        name={'enterprise'}
                        value={values.enterprise}
                        onChange={handleChange}
                        ></Input>
                        {errors.enterprise && <Error>{errors.enterprise}</Error>}
                </Text>
                <Text>
                    <Label>Dirección</Label>
                    <Input 
                        id={'address'}
                        type={'text'} 
                        placeholder={'Dirección'}
                        name={'address'}
                        value={values.address}
                        onChange={handleChange}
                        ></Input>
                        {errors.address && <Error>{errors.address}</Error>}
                </Text>
                <Text>
                    <Label>Municipio</Label>
                    <Input 
                        id={'city'}
                        type={'text'} 
                        placeholder={'Municipio'}
                        name={'city'}
                        value={values.city}
                        onChange={handleChange}
                        ></Input>
                        {errors.city && <Error>{errors.city}</Error>}
                </Text>
                <Text>
                    <Label>Estado</Label>
                    <Input 
                        id={'state'}
                        type={'text'} 
                        placeholder={'Estado'}
                        name={'state'}
                        value={values.state}
                        onChange={handleChange}
                        ></Input>
                        {errors.state && <Error>{errors.state}</Error>}
                </Text>
                <Text>
                    <Label>Nombre de contacto</Label>
                    <Input
                        id={'name'} 
                        type={'text'} 
                        placeholder={'Nombre'}
                        name={'name'}
                        value={values.name}
                        onChange={handleChange}
                        ></Input>   
                        {errors.name && <Error>{errors.name}</Error>} 
                </Text>
                <Text>
                    <Label>Teléfono</Label>
                    <Input 
                        id={'phone'}
                        type={'number'} 
                        placeholder={'Teléfono'}
                        name={'phone'}
                        value={values.phone}
                        onChange={handleChange}
                        onKeyDown={formatInput}
                        ></Input>    
                        {errors.phone && <Error>{errors.phone}</Error>}
                </Text>
                <Text>
                    <Label>Correo</Label>
                    <Input
                        id={'email'} 
                        type={'text'} 
                        placeholder={'Correo'}
                        name={'email'}
                        value={values.email}
                        onChange={handleChange}
                        ></Input>   
                        {errors.email && <Error>{errors.email}</Error>} 
                </Text>
                <Text>
                    <Label>Mensaje</Label>
                    <TextArea 
                        id={'message'}
                        placeholder={'Escriba un mensaje...'}
                        name={'message'}
                        value={values.message}
                        onChange={handleChange}
                        ></TextArea>   
                        {errors.message && <Error>{errors.message}</Error>}
                </Text>
                <SendInput/>
            </form>
        </SignUpForm>
    );
}