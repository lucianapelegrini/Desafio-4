import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export const EditarCliente = () => {

    const [dados] = useState([]);
    const [idCliente] = useState(props.match.params.idCliente);
    const [id] = useState('');
    const [data, setData] = useState('');
    const [ClienteId] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const editPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + '/cliente/' + idCliente + '/pedido', { id, data, ClienteId, }, { headers })
            .then((response) => {
                console.log(response.dados.error);
                console.log(response.dados.message);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possivel conectar a API.'
            })
        });
    }

    useEffect(() => {
        const getPedidos = async () => {
            await axios.get(api + '/cliente/' + idCliente + '/pedido')
                .then((response) => {
                    setData(response.dados.pedido.data);
                })
                .catch(() => {
                    console.log("Erro: não foi possivel se conectar a API.")
                })
        }
        getPedidos();
    }. [idCliente]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <h1>Editar Pedido</h1>
                </div>
                <div className="p-2">
                    <Link to="listar-cliente"
                        className="btn btn-outline-success btn-sn">Clientes
                    </Link>
                </div>
                <hr className="n-1" />
                {status.type === 'error' ? <Alert color="danger"> {status.message}</Alert> : " "}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : " "}

                <Form className='p-2'> onSubmit={editPedido}
                    <FormGroup className='p-2'>
                        <Label>Id</Label>
                        <Input type="text" name="id" placeholder="id do pedido" value={id} />
                    </FormGroup>
                    <FormGroup className='p-2'>
                        <Label>Data</Label>
                        <Input type="text" data="data" placeholder="data do pedido" value={data}
                            onChange={e => setData(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='p-2'>
                        <Label>ClienteId</Label>
                        <Input type="text" name="ClienteId" placeholder="id do cliente" value={ClienteId} />
                    </FormGroup>

                    <Button type="submit" outline color='warning'>Salvar</Button>
                    <Button type="reset" ontline color="success">Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}