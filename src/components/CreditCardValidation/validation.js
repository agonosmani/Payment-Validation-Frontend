import React from "react";
import "./validation.css";

const Validation = (props) => {

    const [formData, updateFormData] = React.useState({
        year: 0,
        month: 0,
        PANNumber: "",
        cardType: "",
        CVV: ""
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const year = parseInt(formData.year);
        const month = parseInt(formData.month);
        const PANNumber = formData.PANNumber;
        const cardType = formData.cardType;
        const CVV = formData.CVV;

        props.onValidate(year, month, PANNumber, cardType, CVV);
    }

    return (
        <div style={{boxShadow: '0 0 10px' + (props.validated.status? ' green': ' red')}} className={"card-info container"}>
            <div className={"valid-box mt-3"}>
                <h2>Card Information:
                    {props.validated.status? " VALID": " INVALID"}
                    <img
                        width={20}
                        src={props.validated.status?
                            "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png":
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png"
                        }
                    />
                </h2>
                <p>{props.validated.text}</p>
            </div>
            <form onSubmit={onFormSubmit}>

                <div className="card-row form-group">
                    <label className={"card-label"} htmlFor="pan">PAN Number</label>
                    <input
                        className="form-control"
                        id="pan"
                        placeholder="Enter PAN Number"
                        name="PANNumber"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="card-row form-group">
                    <label className={"card-label"} htmlFor="card-type">Card Type</label>
                    <select
                        className="form-control"
                        id="card-type"
                        name="cardType"
                        onChange={handleChange}
                        required
                    >
                        <option value="none" selected disabled hidden>Select a Card Type</option>
                        {props.cardtypes.map(term =>
                            <option value={term}>{term}</option>
                        )}
                    </select>
                </div>
                <div className={"card-row row"}>
                    <div className="col last-row-col form-group">
                        <label className={"card-label"}>Expiry Date</label>
                        <input
                            className="form-control"
                            id="month"
                            placeholder="Enter expiry month"
                            name="month"
                            type="number"
                            min="1" max="12"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col last-row-col form-group">
                        <label className={"card-label"}></label>
                        <input
                            className="form-control"
                            id="year"
                            placeholder="Enter expiry year"
                            name="year"
                            type="number"
                            min="2000" max="3000"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col last-row-col form-group">
                        <label className={"card-label"} htmlFor="cvv">CVV</label>
                        <input
                            className="form-control"
                            id="cvv"
                            placeholder="Enter CVV"
                            name="CVV"
                            type="number"
                            min="0"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Validation;