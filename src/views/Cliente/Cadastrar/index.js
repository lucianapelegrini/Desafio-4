import axios from "axios";
import { useState } from "react";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const NovoCliente = () => {

    const [cliente, setCliente] = useState({
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

    const valorInput = e => setCliente({
        ...cliente, [e.target.name]: e.target.value
    });

    const limparInput = () => setCliente({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimnto: '',
        clienteDesde: ''
    });

    const cadastrarCliente = async e => {
        e.preventDefault();
    };

    const headers = {
        "Content-Type": 'aplication/json'
    };

    await axios.post(api+"/cliente/cliente", {headers})
        .then((response) => {
    if (response.data.error) {
            setStatus({
                type: 'error',
                message: response.data.message
            });
        } else {
            setStatus({
                type: 'success',
                message: 'response.data.message'
            });
        };

            return (
                <Container>
                    <div className="d-flex justify-content-between">
                        <div className="p-2">
                            <h1>Cadastrar Cliente</h1>
                        </div>
                    </div>

                    {status.type === "error" ? <Alert color="danger">{status.message}</Alert> : ""}
                    {status.type === "success" ? <Alert color="success">{status.message}</Alert> : ""}

                    <Form className="p-2" onSubmit={cadCliente}>
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

                        <Button className="m-2" type="submit" outline color="success">Cadastrar</Button>
                        <Button className="m-2" type="button" outline color="secondary" onClick={limparInput}>Limpar</Button>
                    </Form>
                </Container>
            );
        
        });
};        
            
