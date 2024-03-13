import React, { useState, useEffect, useRef } from 'react';
import Page_principal from "../../components/page-principal/page-principal";
import { useNavigate } from 'react-router-dom';
export default function Marco() {
    const navigateTo = useNavigate(); 
    const navigate = (path) => {
        navigateTo(path)
    }
    return (
        <>
            <Page_principal url_imagen="https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/MarcoInstitucional/MARCO INSTITUCIONAL 900 PX-02.png" name_component="Marco institucional" description_component="El eje conceptual a lo largo del cual se desarrolla el Marco Institucional, es
            “Ciudadanía, Participación y Civilidad”. Elementos vitales de la relación entre Bogotá y su ciudadanía, como los Objetivos de Desarrollo Sostenible, la Nueva Agenda Urbana y el propio Plan Nacional de Desarrollo, son analizados y puestos en relación uno con otro, en este apartado. Un rasgo manifiesto de la civilidad, es la capacidad de la ciudadanía de usar certeramente los mecanismos de participación de que dispone. De esta manera, asuntos neurálgicos como el futuro de la Región Metropolitana, la estructura político administrativa de Bogotá, el sistema de cargas y beneficios que nos rige, las normas de ordenamiento territorial, o la función social y ecológica de la propiedad, estarán siempre al alcance de su mano y de su comprensión oportuna e integral. "
            audio='https://smob-storage.s3.us-east-2.amazonaws.com/recursosSMOB/recursos_15_02_2024/Audio Marco institucional.mp3'
            areas={
                [
                    <area shape="circle" coords="341.5,350,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
                    <area shape="circle" coords="390,267,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
                    <area shape="circle" coords="293,267,48.5" href='#' alt="Page4" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
                    <area shape="circle" coords="237,120,105" href='#' alt="Page1" onClick={() => {navigate('Nueva agenda urbana y los ODS')}}/>,
                    <area shape="circle" coords="134,297,105" href='#' alt="Page2" onClick={() => {navigate('Estructura administrativa de Bogotá')}}/>,
                    <area shape="circle" coords="340,297,105" href='#' alt="Page3" onClick={() => {navigate('Leyes de ordenamiento territorial')}}/>,
                    <area shape="circle" coords="238,240,235" href='#' alt="Page4" onClick={() => {navigate('')}}/>
                ]
            }/>
        
        </>
        
    )
}

