import { useState } from "react";
import './accordion.css'

const Accordion = () => {
    const [showacc, setShowacc] = useState("billing");
    const handleAccordion = (section) => {
        if (showacc === section) {
            setShowacc(null)
        } else {
            setShowacc(section)
        }
    }
    return (
        <div className="card single-accordion">
            <h2 className="accordion-title">Billing & Shipping Information</h2>
            <div className="card-header">
                <h5 className="mb-0">
                    <button
                        className="accordion-btn"
                        onClick={() => handleAccordion("billing")}

                    >
                        Billing Address
                    </button>
                </h5>
                {showacc === "billing" &&
                    <div>
                        <div className="card-body">
                            <div className="card-details">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, molestiae?</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div className="card-header">
                <h5 className="mb-0">
                    <button
                        className="accordion-btn"
                        onClick={() => handleAccordion("shipping")}
                    >
                        Shipping Address
                    </button>
                </h5>
                {showacc === "shipping" &&
                    <div id="collapseThree">
                        <div className="card-body">
                            <div className="card-details">
                                <p>Your shipping address form is here.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button
                        className="accordion-btn"
                        onClick={() => handleAccordion("card")}
                    >
                        Card Details
                    </button>
                </h5>
                {showacc === "card" &&
                    <div id="collapseThree">
                        <div className="card-body">
                            <div className="card-details">
                                <p>Your card details goes here.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

    );
}

export default Accordion;