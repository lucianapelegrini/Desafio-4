import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const AtualizarCliente = (props) => {

    const [status, setStatus] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimnto: '',
        clienteDesde: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const [ClienteId, setCliente] = useState(props.match.params.id);
    const [Cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimnto: '',
        clienteDesde: ''
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value });
    const limparInput = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimnto: '',
        clienteDesde: ''
    });

    const headers = {
        "Content-Type": 'aplication/json'
    };

    const atualizar = async e => {
        e.preventDefault();

        const getCliente = async () => {
            await axios.get(api+"/clientes/" + ClienteId)
            .then((response) => {
                setCliente(response.data.cliente);
            }).catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: Sem conexão com a API."
                });
            });
        };

        await axios.post(api+"/cliente"+ ClienteId + "/atualizarcliente", ClienteId, {headers})
            .then((response) => {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            }).catch (() => {
        setStatus({
            type: 'success',
            message: 'response.data.message'
        });
    });
};    

    useEffect(() => {
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="p-2">
                        <h1>Alterar dados do cliente</h1>
                    </div>
                </div>

                {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === "success" ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={atualizar}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do cliente" value={cliente.nome} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade" value={cliente.cidade} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf" placeholder="UF" value={cliente.uf} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data de Nascimento</Label>
                        <Input type="date" name="nascimento" placeholder="Data de Nascimento" value={cliente.nascimento} onChange={valorInput} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Cliente desde</Label>
                        <Input type="date" name="clienteDesde" placeholder="Cliente Desde" value={cliente.clienteDesde} onChange={valorInput} />
                    </FormGroup>

                    <Button type="submit" className="m-2" outline color="warning">Salvar</Button>
                    <Button type="button" className="m-2" type="button" outline color="danger" onClick={limparInput}>Limpar</Button>
                </Form>
            </Container>
        </div>
    );
};
