import React from 'react';
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import "./DetalhesEventos.css";



const DetalhesEventos = () => {
    
   return (
    <MainContent>
        <Container>
        <Title titleText={"Comentarios do Evento"} className="custom-tootip" />


            <table className="table-data">
                <thead className="table-data__head">

                    <tr className="table-data__head-row">
                        <th className="table-data__head-title table-data__head-title--big">
                            Evento
                        </th>
                        <th className="table-data__head-title table-data__head-title--big">
                            Descrição
                        </th>
                        <th className="table-data__head-title table-data__head-title--big">
                            Tipo Evento
                        </th>
                        <th className="table-data__head-title table-data__head-title--big">
                            Data
                        </th>
                    </tr>
                </thead>

                <tbody>
                        
                            <tr className="table-data__head-row">
                                <td className="table-data__data table-data__data--big">
                                   Marcio 
                                </td>

                                <td className="table-data__data table-data__data--big">
                                    Marcio
                                </td>

                                {/* <td className="table-data__data table-data__data--big">
                                    {e.tiposEvento.titulo}
                                </td> */}

                                <td className="table-data__data table-data__data--big">
                                    Marcio
                                </td>
                            </tr>
                        
                    
                </tbody>

                </table>

            </Container>
        </MainContent>
    );
};

export default DetalhesEventos;