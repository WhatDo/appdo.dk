import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid'
import { Link, Paper, GridList, GridListTile } from '@material-ui/core';
import './index.css';



class AppDo extends React.Component {

    render() {
        return (
            <Grid container spacing={0}> 
                <Grid item xs={12}><Header /></Grid>
                <Grid item xs={6}><Content /></Grid>
                <Grid container xs={6}><Quotes /></Grid>   
            </Grid>
        );
    }
}

function Header(props) {
    return (
        <div>
            <h1>AppDo</h1>
        </div>
    );
}

function Content(props) {
    return (
        <div>
            <img src={"./portrait.jpeg"} alt="My portrait" height={256} width={256} />
            <h2>About</h2>
            <p>My name is Jonas.</p>
            <p>Android developer since 2015. Have also done work with Django, iOS and Deep Learning.</p>
            <p>Fluent in Kotlin and Coroutines.</p>
            <p>Currently playing with Jetpack Compose and React.</p>
            <br />
            <p><Link href="https://www.linkedin.com/in/jonas-pedersen-a766723b/" rel="noreferrer" target="_blank" color="">@LinkedIn</Link>&nbsp;
            <Link href="https://github.com/whatdo/" rel="noreferrer" target="_blank" color="">@GitHub</Link></p>
            
        </div>
    );
}

class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
        };
    }

    componentDidMount() {
        // TODO: find or create a quotes api
        //fetch('http://quotes.stormconsultancy.co.uk/popular.json')
        // .then(res =>  res.json())
        // .then((data) => {
            // this.setState({quotes: data})
        // })
        // .catch(console.log);
    }

    render() {
        const quotes = this.state.quotes;
        const items = quotes.map((quote) => {
            return (
                <GridListTile key={quote.id}>
                    <QuoteItem quote={quote.quote} author={quote.author} />
                </GridListTile>
            );
        });
        return (
            <GridList cols={3}>{items}</GridList>
        );
    }
}

function QuoteItem(props) {
    const style = {'background-color': "#34324A"}
    return (
        <Paper variant="outlined" elevation={3} className="paper" style={style}>
            <div>
                <p>{props.quote}</p>
                <p>- {props.author}</p>
            </div>
        </Paper>
    );
}

// ========================================

ReactDOM.render(
    <AppDo />,
    document.getElementById('root')
);