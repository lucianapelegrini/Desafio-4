import { type } from '@testing-library/user-event/dist/type';
import { axios } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from 'reactstrap'
import { api } from "../../../config";

export const ListarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + '/cliente')
            .then((response) => {
                // console.log(response.data.cli);
                setData(response.data.cli);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
                //console.log("Erro: Sem conexão com a API.")
            })
    };

    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + '/excluircliente/' + idCliente, { headers })
            .then((response) => {
                console.log(response.data.error);
                getClientes();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possivel conectar-se a API.'
                });
            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div>
            <Container>
                <div className='p-2'>
                    {status.type === "error" ? <Alert color='danger'>{status.message}</Alert> : ""}
                </div>
                <div className="d-flex">
                    <div className='p-auto p-2'>
                        <h1>Visualizar Clientes</h1>
                    </div>
                    <div className='p-2'>
                        <Link td="/inserir-cliente" className="btn btn-outline-success btn-sn" >Cadastrar</Link>
                    </div>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Data de Nascimento</th>
                            <th>Cliente desde</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(cli => (
                            <tr key={cli.id}>
                                <th scope="row">{cli.Id}</th>
                                <td>{cli.nome}</td>
                                <td>{cli.endereco}</td>
                                <td>{cli.cidade}</td>
                                <td>{cli.uf}</td>
                                <td>{cli.nascimento}</td>
                                <td>{cli.clienteDesde}</td>
                                <td>{cli.createdAt}</td>
                                <td className='text-center'>
                                    <Link to={"/pedidos-clientes/" + cli.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                    <Link to={"/editar-cliente/" + cli.id}
                                        className='btn btn-outline-warning btn-sm'>Editar</Link>
                                    <span className='btn btn-outline-danger btn-sm'
                                        onClick={() => apagarCliente(cli.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}