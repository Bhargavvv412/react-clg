import React from 'react'

class Sum2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txt1: '',
            txt2: '',
            ans: '',
            errmsg: {}
        }
    }

    doValidation() {
        const { txt1, txt2 } = this.state
        let temperr = {}
        let isValid = true

        if (!txt1) {
            temperr.txt1 = "Enter no1"
            isValid = false
        } else if (isNaN(txt1)) {
            temperr.txt1 = "Enter only digits in no1"
            isValid = false
        }

        if (!txt2) {
            temperr.txt2 = "Enter no2"
            isValid = false
        } else if (isNaN(txt2)) {
            temperr.txt2 = "Enter only digits in no2"
            isValid = false
        }

        this.setState({ errmsg: temperr })
        return isValid
    }

    doSum() {
        if (this.doValidation()) {
            const no1 = parseInt(this.state.txt1)
            const no2 = parseInt(this.state.txt2)
            const c = no1 + no2
            this.setState({ ans: `Sum is ${c}`, errmsg: {} })
        } else {
            this.setState({ ans: '' }) // Clear previous answer if validation fails
        }
    }

    render() {
        const { txt1, txt2, errmsg, ans } = this.state

        return (
            <>
                <h1>Sum Demo</h1>

                No1 : <input
                    type='text'
                    value={txt1}
                    onChange={(e) => this.setState({ txt1: e.target.value })}
                />
                <div style={{ color: "red" }}>{errmsg.txt1}</div>

                No2 : <input
                    type='text'
                    value={txt2}
                    onChange={(e) => this.setState({ txt2: e.target.value })}
                />
                <div style={{ color: "red" }}>{errmsg.txt2}</div>

                <br />
                <input
                    type='button'
                    value='+'
                    onClick={this.doSum.bind(this)}
                />
                <h3>{ans}</h3>
            </>
        )
    }
}

export default Sum2
