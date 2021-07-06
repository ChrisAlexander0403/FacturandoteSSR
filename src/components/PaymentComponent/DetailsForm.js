import React, { useEffect, useState } from 'react';
import data from '../productSlider/ProductSliderData.json';
import { DetailsDiv, Info, Name } from './PaymentElements';

export default function DetailsForm({id}) {
    const [product, setProduct] = useState('');
    useEffect(() => {
        if (id.charAt(0) === 'e') {
            setProduct(data.emision.find(el => el.id === id));
        } else if (id.charAt(0) === 't') {
            setProduct(data.timbrado.find(el => el.id === id))
        }
    }, []);
    return (
        <DetailsDiv>
            <Name>{product.name}</Name>
            <Info><p>Precio:</p> ${product.price}.00</Info>
            <Info><p>Contenido:</p> {product.content}</Info>
            <Info><p>Precio por unidad:</p> {product.unityPrice}</Info>
            <Info><p>Total:</p> ${product.pricePlusIVA}{product.price === 290 ? "0" : ".00"}</Info>
            <br/>
            <br/>
            <Name style={{fontSize: "22px"}}>Realice su transferencia a la cuenta:</Name>
            <Info><p>Razón Social: </p><p>Soluciones America del Sureste de C .V</p></Info>
            <Info><p>RFC: </p><p>SAS180608IN4</p></Info>
            <Info><p>Cuenta: </p><p>6550699692-5</p></Info>
            <Info><p>Clabe: </p><p>014910655069969257</p></Info>
            <Info><p>Banco: </p><p>SANTANDER SUC. 7867 Macro Plaza</p></Info>
            <br/><br/>
            <Name style={{fontSize: "15px"}}>Al terminar, ingrese sus datos y adjunte la imagen de su transferencia en los formatos:  .jpg, .png, jpeg, .pdf.</Name>
        </DetailsDiv>
    );
}