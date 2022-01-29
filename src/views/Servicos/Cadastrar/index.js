import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const Cadastrar = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mwessage: ''
    })

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });

    const cadServico = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/servico", servico, { headers })
            .then((response) => {
                
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                console.log("Erro: Sem cnexão com a API.")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Servico</h1>
                </div>
                <div className="p-2">
                    <Link to="/listar-servico"
                        className="btn btn-outline-sucess btn-sm">Serviços</Link>
                </div>
            </div>
            <hr className="m-1" />

            {status.type === 'error'? <Alert color="danger">{status.message}</Alert>: ""}

            {status.type === 'success'? <Alert color="success">{status.message}</Alert>: ""}

            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label >Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do serviço"
                        onChange={valorInput} />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descrição" placeholder="Descrição do seviço"
                        onChange={valorInput} />
                </FormGroup>

                <Button type="Submit" outline color="sucess">Cadastrar</Button>
            </Form>
        </Container>
    );
};