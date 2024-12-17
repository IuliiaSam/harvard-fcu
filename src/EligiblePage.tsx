import * as React from "react";

type Props = React.PropsWithChildren<object>;

const JoinTodayUrl = 'https://app.loanspq.com/xa/xpressApp.aspx?enc=Kw21Wblm1yxpjJabdoZaD-Gr_IHl-C8fchODgpSxXjXxSPGFrEl4jSeBYt4aHlqZ_hVg_J5c4ST0o0u4NRrvqXWvff49QjYj346K93kVe7U&_gl=1*se66a5*_gcl_au*MTQ3NTg0NDEyLjE3MTc0MTY3OTI.*_ga*MTA5OTEzNjYxNy4xNzE3NDE2Nzky*_ga_TW1V1ZP5ET*MTcxNzQyNzE3OC4zLjEuMTcxNzQzMDU3Ni4wLjAuMA';
const FFAUrl = 'https://financialfitnessassociation.org'

const EligiblePage: React.FC<Props> = () => {
    return (
        <>
            <h3 className='elig-h3'>
                Congrats! It looks like you are eligible for membership! 
            </h3>
            <p className='elig-p'>
                Click the link below to start your application! Make sure you have the following ready before you start the application:
            </p>
            <ul className='elig-ul'>
                <li>Valid Social Security #</li>
                <li>Valid government issued ID #</li>
                <li>Date of Birth</li>
                <li>Address, Email address and phone number</li>
                <li>Work ID (if applicable)</li>
                <li>Your mobile phone</li>
            </ul>
            <div className='elig-button-wrapper'>
            <button className='elig-button' type='button'>{'Join Today! >'}</button>
            <a href='https://harvardfcu.org/membership/join/' className='elig-a'>Learn More About Memberships</a>
        </div>
        </>
    )
}

export default EligiblePage;