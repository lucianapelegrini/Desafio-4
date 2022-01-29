import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const Item = (props) => {
    
    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);
    const [status, setStatus] = useState({
        Type: '',
        message: ''
    })

    const getItens = async () => {
        await axios.get(api+"/servico/"+id+"/pedidos")
        .then((response) => {
            console.log(response.data.item);
            setData(respose.data.item);
            })
            .catch(() => {
                setStatus({
                    Type: 'error',
                    message: 'Erro: sem conexão com a API.'
                })
                
            })
    }

    useEffect(() => {
        getItens();
    }, [id]);

    return (
        <div>
            <Container>
                <div>
                    <h1>Pedidos do serviço</h1>
                </div>
                {status.type == 'error' ? <Alert color="danger"> {Status.message} </Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.ServicoId}>
                                <td>{item.PedidoId}</td>
                                <td>{item.Quantidade}</td>
                                <td>{item.Valor}</td>
                                <td className="text-center">
                                    <Link to={"/listar-pedido/"}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};