import axios from "../custom-axios/axios";

const CreditCardService = {
    fetchCreditCardTypes: () => {
        return axios.get("/payment/card-types");
    },
    validateCreditCard: (year, month, PANNumber, cardType, CVV) => {
        return axios.post("/payment/validate", {
            "expiryDate": {
                "year": year,
                "month": month
            },
            "PANNumber": PANNumber,
            "cardType": cardType,
            "CVV": CVV
        });
    },
}

export default CreditCardService;