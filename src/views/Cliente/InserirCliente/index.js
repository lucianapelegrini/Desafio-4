import { axios } from 'axios';
import { useState } from 'react';
import { Label } from 'react-router-dom';
import { Container, FormGroup } from 'reactstrap';
import { api } from '../../../../config';

export const InserirCliente = () => {

    const [cliente, setCliente] = useState({
        nome: '',
        nascimento: ''
    });

    const valorInput = e => setCliente({ ...cliente, [e.target.name]: e.target.value })
    const cadCliente = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        }
        await axios.post(api+"/cliente", cliente, {headers})
            .then(response)=> {
    console.log(response.data.message);
    };
}
.catch (() => {
    console.log("Erro: Sem conexão com a API.")
}

return (
    <div>
        <Container>
            <div>
                <h1>Cadastrar Cliente</h1>
            </div>
            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="nome do cliente" onChange={valorInput}/>
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Nascimento</Label>
                    <Input type="text" name="nasimento" placeholder="nome do data de nascimento" onChange={valorInput} />
                </FormGroup>
                <Button type="submit" ontline color="success">Cadastrar</Button>
                <Button type="reset" ontline color="warning">Limpar</Button>
            </Form>
        </Container>
    </div>
);
