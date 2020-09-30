import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

function Cadastro() {
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const Save = (event) => {

        var paciente = { 
            nome: nome,
            idade: idade,
            peso: peso,
            altura: altura
        }
        let data = JSON.stringify(paciente, null, 2);
        alert("Salvou!")
        console.log(paciente);
        var fs = require('browserify-fs'); 
        fs.writeFile('cadastros.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
        
        event.preventDefault();
    }

    return (
        <div class="container-page">
            <h1> Cadastro de Clientes </h1>
            <div>
                <div>
                    <TextField id="nome" label="Nome" value={nome} onChange={e => setNome(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="peso" label="Peso" value={peso} onChange={e => setPeso(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="idade" label="Idade" value={idade} onChange={e => setIdade(e.target.value)} required fullWidth />
                </div>
                <div>
                    <TextField id="altura" label="Altura" value={altura} onChange={e => setAltura(e.target.value)} required fullWidth />
                </div>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={Save}>
                    Salvar
                </Button>
            </div>
        </div>
    );
}

export default Cadastro;