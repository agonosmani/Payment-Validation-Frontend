import './App.css';
import React, {Component} from "react";
import Validation from "../CreditCardValidation/validation";
import CreditCardService from "../../repository/credit-card-repository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardtypes: [],
            validated: {
                "status": false,
                "text": "Please enter your credit card information."
            }
        }
    }

    render() {
        return (
            <div>
                <Validation
                    cardtypes={this.state.cardtypes}
                    onValidate={this.validateCreditCard}
                    validated={this.state.validated}
                />
            </div>
        );
    }

    loadCardTypes = () => {
        CreditCardService.fetchCreditCardTypes()
            .then((data) => {
                this.setState({
                    cardtypes: data.data
                });
            });
    }

    validateCreditCard = (year, month, PANNumber, cardType, CVV) => {
        CreditCardService.validateCreditCard(year, month, PANNumber, cardType, CVV)
            .then((data) => {
               this.setState({
                   validated: data.data
               });
            });
    }

    componentDidMount() {
        this.loadCardTypes();
    }
}

export default App;
