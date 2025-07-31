import React from 'react';

class Sumdemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt1: '',
            txt2: '',
            ans: ''
        };
    }

    doSum() {
        const { txt1, txt2 } = this.state;

        if (txt1 === '' || txt2 === '') {
            this.setState({ ans: 'Both numbers are required!' });
            return;
        }

        const no1 = parseInt(txt1);
        const no2 = parseInt(txt2);

        if (isNaN(no1) || isNaN(no2)) {
            this.setState({ ans: 'Please enter valid numbers' });
            return;
        }

        const c = no1 + no2;
        this.setState({ ans: 'Sum is ' + c });
    }

    render() {
        return (
            <>
                <h1>Sum Demo</h1>
                No1: <input
                    type='text'
                    value={this.state.txt1}
                    onChange={(e) => this.setState({ txt1: e.target.value })}
                />
                <br />
                No2: <input
                    type='text'
                    value={this.state.txt2}
                    onChange={(e) => this.setState({ txt2: e.target.value })}
                />
                <br />
                <input
                    type='button'
                    value="+"
                    onClick={this.doSum.bind(this)}
                />
                <p style={{ color: 'blue' }}>{this.state.ans}</p>
            </>
        );
    }
}

export default Sumdemo;