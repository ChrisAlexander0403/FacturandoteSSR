import React from 'react';
import { Body, Container, Title, Span } from '../header/Header';
import Accordeon from './Accordeon';
import { DivQuestions} from './QuestionsElements';

export default function QuestionsComponent(){
    return(
        <Body>
            <Container>
                <Title><Span>P</Span>reguntas Frecuentes</Title>
                <DivQuestions>
                    <h2>Resuelve algunas de las dudas frecuentes sobre la facturación electrónica</h2>
                    <Accordeon
                        question={"¿Qué es un certificado de sello digital?"}
                        answer={"Tipo de certificado digital para uso exclusivo de los comprobantes fiscales digitales."}
                    />
                    <Accordeon
                        question={"¿Cuál es la relación de la firma electrónica avanzada con la emisión de facturas electrónicas?"}
                        answer={"La firma electrónica avanzada juega un papel crucial en la facturación electrónica, ya que sin ella las facturas electrónicas quedarían sin validez legal ante las autoridades fiscales."}
                    />
                    <Accordeon
                        question={"¿Qué es SICOFI?"}
                        answer={"El Sistema Integral de Comprobantes Fiscales (SICOFI) es una aplicación del SAT que cuenta con un Módulo del Emisor de Comprobantes Fiscales, mismo que se encarga de asignar folios y recibir reportes mensuales de facturas electrónicas emitidas vía web."}
                    />
                    <Accordeon
                        question={"¿Qué es el SOLCEDI?"}
                        answer={"La aplicación de Solicitud del Certificado Digital (SOLCEDI) es utilizada para que el Contribuyente (Persona Moral o Física) pueda generar un archivo de requerimiento, con el cual realizará el proceso para obtener un Certificado Digital que ocupará en sus movimientos de tipo fiscal."}
                    />
                    <Accordeon
                        question={"¿Se deben conservar las facturas electrónicas?"}
                        answer={"Sí, los contribuyentes deberán conservar y registrar en su contabilidad los comprobantes fiscales digitales que emitan. El registro en su contabilidad deberá ser simultáneo al momento de la emisión de los comprobantes fiscales digitales. Los comprobantes fiscales digitales, así como los archivos y registros electrónicos de los mismos se consideran parte de la contabilidad del contribuyente, quedando sujetos a lo dispuesto por el artículo 28 del Código Fiscal de la Federación. (Fundamento Legal: Artículo 29 fracción IV del Código Fiscal de la Federación)"}
                    />
                    <Accordeon
                        question={"¿Cuánto tiempo se conserva una factura electrónica?"}
                        answer={"La ley obliga a todos los contribuyentes a conservar las Facturas Electrónicas por un periodo mínimo de 5 años en el formato original (XML) ó en papel en el caso de los receptores que reciban el comprobante impreso."}
                    />
                    <Accordeon
                        question={"¿Cómo funcionan las facturas electrónicas?"}
                        answer={"La factura electrónica es un método de facturación que utiliza tecnología digital para generar y resguardar este tipo comprobantes fiscales digitales. Cada factura que se emite cuenta con un sello digital, así como un folio que indica el número de la transacción. Las facturas electrónicas pueden ser enviadas y guardadas utilizando medios electrónicos. Los contribuyentes que opten por emitir facturas electrónicas, deberán enviar un reporte mensual al SAT que contenga la información de todas las facturas que emitieron a sus clientes. A su vez, los clientes podrán verificar la validez del comprobante recibido, ingresando a este portal en la sección de Validación de Certificados Digitales."}
                    />
                    <Accordeon
                        question={"¿Qué se hará para aquellos receptores que no puedan recibir la factura en electrónico?"}
                        answer={"Los contribuyentes que decidan emitir facturas electrónicas deberán proporcionar a sus clientes en documento impreso el comprobante electrónico cuando así les sea solicitado. (Fundamento legal: Artículo 29 fracción IV del Código Fiscal de la Federación). La factura electrónica puede imprimirse en cualquier tipo de papel (no requiere de un formato o forma preimpresa en especifico) y tienen la misma validez que las facturas tradicionales."}
                    />
                    <Accordeon
                        question={"En caso de tener varias sucursales, ¿se tendrán varios certificados de sellos digitales para cada una de éstas?"}
                        answer={"Los contribuyentes podrán tramitar la obtención de un certificado de sello digital para ser utilizado por todos sus establecimientos o locales, o bien, tramitar la obtención de un certificado de sello digital por cada uno de sus establecimientos (Fundamento legal: Artículo 29 fracción I párrafo tercero del Código Fiscal de la Federación)."}
                    />
                    <Accordeon
                        question={"¿Qué pasará con las ventas a público en general?"}
                        answer={"Para los efectos de lo señalado en la fracción IV del artículo 29-A, se tendrá por cumplida dicha obligación en los casos de comprobantes fiscales digitales globales que amparen una o más operaciones efectuadas con público en general, cuando en el mismo se consigne el RFC genérico XAXX010101000."}
                    />
                    <Accordeon
                        question={"¿En qué consiste la solicitud de folios?"}
                        answer={"La solicitud de folios consiste en proporcionar al contribuyente folios válidos para usarlos en su proceso de facturación electrónica. Para solicitar dichos folios, deberá ingresar a la página web del Sistema Integral de Comprobantes Fiscales (SICOFI). Una vez dentro del portal, deberá realizar lo siguiente: Ingrese su RFC, Seleccione su serie y rango de folios, Indique la ruta o localización del certificado de Tu Firm@ (Firma Electrónica Avanzada), indique la ruta o localización de su llave privada (*.key) asociada a dicho certificado de Tu Firm@. Al terminar dicho proceso, usted contará con uno o varios rangos de folios asignados por el SAT."}
                    />
                    <Accordeon
                        question={"¿Qué tratamiento se les dará a las notas de crédito, es decir, se puede usar el esquema de comprobante digital para las notas de crédito?"}
                        answer={"Si, el CFD no solo es factura electrónica, sino notas de crédito, notas de cobro, recibo de arrendamiento, recibo de honorarios, donativos y carta porte por lo que cualquiera de estos documentos tendrá el mismo tratamiento técnico."}
                    />
                    <Accordeon
                        question={"¿Qué RFC se utilizará en las facturas electrónicas que amparen una o más operaciones efectuadas con público en general?"}
                        answer={"El RFC genérico XAXX010101000."}
                    />
                </DivQuestions>
            </Container>
        </Body>
    );
}